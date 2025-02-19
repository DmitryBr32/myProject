const router = require('express').Router();
const { User } = require('../../db/models');
const { refresh } = require('../../config/cookiesConfig');
const bcrypt = require('bcrypt');
const generateToken = require('../../utils/generateToken');

router.post('/registration', async (req, res) => {
  try {
    const { login, email, password } = req.body
    console.log("login:", login)
    console.log("password:", password)
    console.log("email:", email)

    if (!(login && email && password)) {
      return res.status(400).json({ message: 'Все поля должны быть заполнены'})
    }

    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { login, email, password: await bcrypt.hash(password, 10)}
    })
    console.log(user)
    if (!isCreated) {
      return res.status(400).json({ message: 'Пользователь с такой почтой уже существует'})
    }

    const plainUser = user.get({ plain: true })
    delete plainUser.password

    const { accessToken, refreshToken } = generateToken({ user: plainUser })
    console.log('куки', accessToken, refreshToken)
    res.cookie('refreshToken', refreshToken, refresh)
       .json({ user: plainUser, accessToken }); 

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    console.log('inputs', email, password )
    if (!(email && password)) {
      return res.status(400).json({ message: 'All fields must be provided.' });
    }

    const user = await User.findOne({ where: { email }})
    if (!user) {
      return res.status(400).json({
        message: `Пользователь с почтой ${email} не найден`
      })
    }
    console.log("user:", user)
    
    const isCorrectPass = await bcrypt.compare(password, user.password)
    console.log("isCorrectPass:", isCorrectPass)
    if (!isCorrectPass) {
      return res.status(400).json({
        message: `Неверный пароль`
      })
    }

    const plainUser = user.get({ plain: true });
    delete plainUser.password;

    const { accessToken, refreshToken } = generateToken({ user: plainUser });

    res
      .cookie('refreshToken', refreshToken, refresh)
      .json({ user: plainUser, accessToken });

  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
})

router.get('/logout', (req, res) => {
  try {
    res.clearCookie('refreshToken').sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
})

module.exports = router;