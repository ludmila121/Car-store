const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.get('/:catalog', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.get('/:favorites', async (req, res, next) => {
    res.json({ message: 'template message' })
  })
router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:catalogId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:catalogId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router