const router = require('express').Router()

// const getLatestEntrie = require('../middlewares/locals')

// router.use(getLatestEntrie)

router.get('/', (req, res) => {
  console.log('Для примера')
  res.send('Для примера')
})

router.get('/2', (req, res) => {
  console.log('Для примера ещё разок')
  res.send('Для примера ещё разок')
})

module.exports = router;