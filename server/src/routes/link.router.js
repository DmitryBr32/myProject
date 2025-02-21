const router = require('express').Router();

// Import sequelize and the Board model from index.js
const { Link } = require('../../db/models'); // ADJUST PATH IF NEEDED
const { checkId, checkUserId, checkBoardId } = require('../middlewares/common');

//Все линки
router.get('/', async (req, res) => {
  try {
    const links = await Link.findAll();
    res.status(200).json(links);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

//Все линки пользователя
router.get('/:userId/userlinks/', checkUserId, async (req, res) => {
  try {
    const { userId } = req.params;
    const links = await Link.findAll({ where: { userId } });
    res.status(200).json(links);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

//Все линки на доске
router.get('/:boardId/boardlinks/', checkBoardId, async (req, res) => {
  try {
    const { boardId } = req.params;
    const links = await Link.findAll({ where: { boardId } });
    res.status(200).json(links);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
});

//Линк по id
router.get('/:id', checkId, async (req, res) => {
  const { id } = req.params;
  try {
    const board = await Link.findByPk(id);
    res.status(200).json(board);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

//Добавить линк
router.post('/new', async (req, res) => {
  const { title, hex, userId, boardId } = req.body;
  try {
    const newBoard = await Link.create({ title, hex, userId, boardId });
    res.status(201).json(newBoard);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

//Удалить доску
router.delete('/:id', checkId, async (req, res) => {
  const { id } = req.params;

  try {
    const link = await Link.findByPk(id);
    const deleteLink = await Link.destroy({ where: { id } });
    if (deleteLink) {
      res.status(200).json({ message: `Линк: ${link.get('title')}, удален!` });
    } else {
      res.status(400).json({ warningMessage: `Линк ${id} не найден!` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

router.put('/:id', checkId, async (req, res) => {
  const { id } = req.params;
  const { title, hex } = req.body;
  try {
    const updateTitle = await Link.update({ title, hex }, { where: { id } });
    res.status(201).json(updateTitle);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
