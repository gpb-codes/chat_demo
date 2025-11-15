# 💬 Chat Demo

Una aplicación de chat simple con frontend Angular y backend Flask.

## Descripción

Este proyecto es una demostración de una aplicación de chat en tiempo real que utiliza:
- **Frontend**: Angular con comunicación HTTP
- **Backend**: Flask con CORS habilitado
- **Comunicación**: REST API

## Estructura del Proyecto

```
chat_demo/
├── README.md
├── BACKEND/
│   ├── app.py              # Servidor Flask principal
│   ├── chat.py             # Lógica de respuestas del bot
│   └── requirements.txt     # Dependencias Python
└── FRONTEND/
    ├── angular.json        # Configuración de Angular
    └── src/
        ├── app.module.ts   # Módulo principal
        └── app/
            ├── chat.component.ts    # Lógica del componente
            ├── chat.component.html  # Template
            └── chat.component.css   # Estilos
```

## Tecnologías Utilizadas

| Componente | Tecnología | Versión |
|-----------|-----------|---------|
| Backend | Flask | Latest |
| CORS | Flask-CORS | Latest |
| Frontend | Angular | Latest |
| HTTP Client | Angular HttpClient | Built-in |

## Requisitos Previos

### Backend
- Python 3.x instalado
- pip (gestor de paquetes Python)

### Frontend
- Node.js 14+ instalado
- npm (incluido con Node.js)
- Angular CLI

## Instalación y Configuración

### 🔧 Backend - Configuración

1. Navega a la carpeta del backend:
```bash
cd BACKEND
```

2. Instala las dependencias desde [requirements.txt](BACKEND/requirements.txt):
```bash
pip install -r requirements.txt
```

3. Ejecuta el servidor Flask:
```bash
python app.py
```

✅ El servidor estará disponible en `http://localhost:5000`

### 🎨 Frontend - Configuración

1. Navega a la carpeta del frontend:
```bash
cd FRONTEND
```

2. Instala las dependencias de npm:
```bash
npm install
```

3. Inicia el servidor de desarrollo de Angular:
```bash
ng serve
```

✅ La aplicación estará disponible en `http://localhost:4200`

## Uso de la Aplicación

1. **Asegúrate de que ambos servidores estén corriendo:**
   - Backend: `http://localhost:5000`
   - Frontend: `http://localhost:4200`

2. **Interfaz de usuario:**
   - Escribe un mensaje en el campo de entrada
   - Haz clic en el botón "Enviar"
   - El bot responderá inmediatamente

3. **Flujo de mensajes:**
   - El mensaje se envía al backend mediante POST a `/api/chat`
   - El backend procesa el mensaje y devuelve una respuesta
   - El frontend muestra ambos mensajes (usuario y bot)

## Componentes del Proyecto

### Backend

#### [BACKEND/app.py](BACKEND/app.py)
Servidor Flask que proporciona la API REST:
- **Endpoint**: `POST /api/chat`
- **Request**: `{ "message": "texto del usuario" }`
- **Response**: `{ "response": "respuesta del bot" }`
- **CORS**: Habilitado para peticiones desde el frontend

#### [BACKEND/chat.py](BACKEND/chat.py)
Módulo con la lógica de generación de respuestas:
- Función `get_response(message)`: Procesa mensajes del usuario
- Actualmente simula respuestas con echo del mensaje

#### [BACKEND/requirements.txt](BACKEND/requirements.txt)
Dependencias Python necesarias:
- `flask`: Framework web
- `flask-cors`: Soporte CORS para peticiones cross-origin

### Frontend

#### [FRONTEND/src/app/chat.component.ts](FRONTEND/src/app/chat.component.ts)
Componente principal de Angular:
- **Propiedades**:
  - `messages`: Array de pares usuario-bot
  - `input`: Almacena el texto del usuario
- **Métodos**:
  - `sendMessage()`: Envía mensaje al backend y actualiza la UI
- **Servicio HTTP**: Comunica con backend en `http://localhost:5000/api/chat`

#### [FRONTEND/src/app/chat.component.html](FRONTEND/src/app/chat.component.html)
Template del componente:
- Loop con `*ngFor` que muestra todos los mensajes
- Two-way binding con `[(ngModel)]` para el input
- Botón que dispara `sendMessage()`

#### [FRONTEND/src/app/chat.component.css](FRONTEND/src/app/chat.component.css)
Estilos del componente:
- `.chat-box`: Contenedor principal con ancho de 400px
- `input`: Campo de texto con 80% de ancho
- `button`: Botón de envío con padding

## Flujo de Comunicación

```
┌─────────────┐
│   Usuario   │
└──────┬──────┘
       │ Escribe mensaje
       │
       ▼
┌─────────────────────────────┐
│  Chat Component (Angular)   │
│  - Lee input                │
│  - Envía POST request       │
└──────┬──────────────────────┘
       │ HTTP POST
       │ /api/chat
       │
       ▼
┌─────────────────────────────┐
│   Flask Server              │
│  - Recibe mensaje           │
│  - Llama get_response()     │
│  - Devuelve JSON            │
└──────┬──────────────────────┘
       │ HTTP Response
       │ JSON
       │
       ▼
┌─────────────────────────────┐
│  Chat Component (Angular)   │
│  - Recibe respuesta         │
│  - Actualiza messages[]     │
│  - Renderiza UI             │
└─────────────────────────────┘
```

## Notas Importantes

⚠️ **Debugging y Desarrollo:**
- Flask ejecuta en modo debug (`debug=True`)
- Los cambios en el código se recargan automáticamente
- Usa las herramientas de desarrollador del navegador (F12) para ver errores

🔒 **Seguridad:**
- CORS está habilitado (ten cuidado en producción)
- No hay validación de mensajes implementada
- No hay autenticación implementada

🚀 **Mejoras Futuras:**
- Agregar persistencia de mensajes (base de datos)
- Implementar lógica de chat más inteligente
- Agregar autenticación de usuarios
- Mejorar estilos y diseño responsivo
- Agregar notificaciones en tiempo real con WebSockets

## Solución de Problemas

### Error: "Cannot GET /api/chat"
- Verifica que Flask está corriendo en `localhost:5000`
- Revisa la consola de Flask para errores

### Error: "CORS error"
- Asegúrate de que `flask-cors` está instalado
- Verifica que CORS está inicializado en `app.py`

### El mensaje no se envía
- Abre la consola del navegador (F12)
- Revisa la pestaña "Network" para ver la petición HTTP
- Verifica que ambos servidores estén corriendo

## Licencia

Este proyecto es de código abierto y está disponible bajo licencia MIT.

---

**Creado con ❤️ usando Angular y Flask**