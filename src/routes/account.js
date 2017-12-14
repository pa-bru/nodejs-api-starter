import express from 'express'

const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
router.get('/', (req, res) => {
  res.status(200).send('in account')
})
export default router
