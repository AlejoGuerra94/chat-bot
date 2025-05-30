import { chatService } from './src/services/chatServices.js';
import { Message } from './src/models/messageSchema.js';
import { connectDB } from './dataBase.js';
import { Server } from 'socket.io';
import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);
await connectDB(); 

const io = new Server(server, {
  cors: { origin: 'http://localhost:5173' }
});

io.on('connection', async (socket) => {
  console.log('Usuario conectado:', socket.id);

  const messages = await Message.find().sort({ timestamp: 1 });
  socket.emit('message_history', messages);

  socket.on('user_message', async (userMessage) => {
    await chatService.saveMessage('user', userMessage);
    const botResponse = await chatService.getBotResponse(userMessage);
    await chatService.saveMessage('bot', botResponse);
    socket.emit('bot_message', botResponse);
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});