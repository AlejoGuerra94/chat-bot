import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  sender: { type: String, enum: ['user', 'bot'], required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export const Message = model('Message', messageSchema);