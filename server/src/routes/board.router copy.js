const router = require('express').Router();


// Import sequelize and the Board model from index.js
const { Board } = require('../../db/models'); // ADJUST PATH IF NEEDED
const { checkId, checkUserId } = require('../middlewares/common');

//Все доски
router.get('/', async (req, res) => {
  try {
    const boards = await Board.findAll();
    res.status(200).json(boards);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

//Все доски пользователя
router.get('/:userId/userboards/', checkUserId, async (req, res) => {
  try {
    const {userId} = req.params;
    const boards = await Board.findAll({where: {userId}});
    res.status(200).json(boards);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

//Доска по id
router.get('/:id', checkId, async (req, res) => {
  const { id } = req.params;
  try {
    const board = await Board.findByPk(id);
    res.status(200).json(board);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

//Добавить доску
router.post('/new', async (req, res) => {
  const { title, userId } = req.body;
  try {
    const newBoard = await Board.create({ title, userId });
    res.status(201).json(newBoard);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

//Удалить доску
router.delete('/:id', checkId, async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    const board = await Board.findByPk(id);
    const deleteBoard = await Board.destroy({ where: { id } });
    if (deleteBoard) {
      res.status(200).json({ message: `Доска: ${board.get('title')}, удалена!` });
    } else {
      res.status(400).json({ warningMessage: `Доска ${id} не найдена!` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

router.put('/:id', checkId, async (req, res) => {
  const { id } = req.params;
  const { title, userId } = req.body;
  try {
    const updateTitle = await Board.update(
      { title, userId },
      { where: { id } },
    );
    res.status(201).json(updateTitle);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
