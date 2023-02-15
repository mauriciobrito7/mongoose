import { messagesModel } from '../models/messages.model.js';

export default class MessagesManager {
  async getMessages() {
    try {
      return await messagesModel.find().lean()
    } catch (error) {
      console.log(error)
      return error
    }
  }

  async addMessage(message) {
    try {
      return await messagesModel.create(message);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
