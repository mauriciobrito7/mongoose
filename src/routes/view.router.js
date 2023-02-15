import { Router } from 'express'
import MessagesManager from '../dao/mongoManagers/messagesManager.js'

const router = Router()

const messagesManager = new MessagesManager()


router.get('/', async (req, res) => {
  try {
   const messages = await messagesManager.getMessages()
   console.log(messages)
   res.render('chat', {messages})
  } catch (error) {
   console.log(error)
   res.status(500).json(error)
 }
})

export default router