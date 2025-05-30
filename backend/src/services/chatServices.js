import { Message } from "../models/messageSchema.js";
import { botResponses } from "../utils/bot.js";

export const chatService = {
  async saveMessage(sender, text) {
    try {
      if (!sender || !text) {
        throw new Error('Sender y text son requeridos');
      }
      
      const newMessage = new Message({ sender, text });
      const savedMessage = await newMessage.save();
      console.log('Mensaje guardado:')
      return savedMessage;

    } catch (error) {
      console.error('Error al guardar mensaje:', error.message);
      throw error; 
    }
  },

  async getBotResponse(userMessage) {
    try {
      if (typeof userMessage !== 'string' || userMessage.trim() === '') {
        return botResponses.empty;
      }
      
      const lowerCaseMsg = userMessage.toLowerCase();
      let response = botResponses.default;

      if (/hola|buenos días|buenas tardes/i.test(lowerCaseMsg)) {
        response = botResponses.hola;
      } else if (/ticket|soporte|ayuda/i.test(lowerCaseMsg)) {
        response = botResponses.ticket;
      } else if (/gracias|agradezco/i.test(lowerCaseMsg)) {
        response = botResponses.gracias;
      }

      return response;
    } catch (error) {
      console.error('Error generando respuesta del bot:', error);
      return botResponses.error;
    }
  },
};