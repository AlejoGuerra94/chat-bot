# Chatbot con WebSockets y MongoDB

## Setup

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/chatbot-websockets.git
   cd chatbot-websockets
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   ```bash
   cp .env.example .env
   # Editar .env con tus credenciales
   ```

4. Iniciar servidor:
   ```bash
   npm run dev
   ```

## Decisiones Técnicas

- **Arquitectura**: Separación clara entre backend (Express + Socket.IO) y frontend (React)
- **Base de Datos**: MongoDB Atlas para persistencia de mensajes
- **WebSockets**: Implementación bidireccional para chat en tiempo real

## Desafíos y Soluciones

1. **Problema**: Mensajes no se guardaban en la DB correcta  
   **Solución**: Especificar explícitamente `dbName: 'chatbot-db'` en la conexión de Mongoose

2. **Problema**: Reinicios constantes en desarrollo  
   **Solución**: Configurar adecuadamente nodemon para ignorar cambios en frontend

##  Estructura del Proyecto

```
/backend
  /models       # Schemas de MongoDB
  /services     # Lógica de negocio
  index.js      # Servidor principal
/frontend
  /src
    /components # Componentes React
  App.js       # Punto de entrada
```

## Mejoras Futuras

- Implementar autenticación de usuarios
- Añadir soporte para archivos multimedia
- Integrar tests automatizados
