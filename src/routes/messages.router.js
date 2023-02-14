import {Router } from 'express'
import MessagesManager from '../dao/mongoManagers/messagesManager.js'

const messagesRouter = Router()

const messagesManager = new MessagesManager()

messagesRouter.get('/', async (req, res) => {
  try {
    const messages = await messagesManager.getMessages()
    res.json(messages)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

messagesRouter.post('/', async (req, res) => {
  try {
    const message = await messagesManager.addMessage(req.body)
    res.json(message)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

export default messagesRouter