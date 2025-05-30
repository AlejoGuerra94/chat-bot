import mongoose from 'mongoose';

export async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb+srv://chatbot-user:chatbot_user123@cluster0.dagecju.mongodb.net/chatbot-db?retryWrites=true&w=majority&appName=Cluster0';
    
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    });
    
    console.log('Conexión exitosa', {
      db: mongoose.connection.name,
      host: mongoose.connection.host
    });
  } catch (error) {
    console.error('Error en la conexión', error.message);
    process.exit(1);
  }
}