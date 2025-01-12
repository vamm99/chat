# **Chat en Tiempo Real con BroadcastChannel API**

Este proyecto implementa un sistema de chat en tiempo real utilizando la API `BroadcastChannel`, permitiendo que los mensajes se compartan entre múltiples pestañas del mismo navegador. Inspirado en plataformas de mensajería modernas como Facebook Messenger o WhatsApp, este chat permite a los usuarios enviar y recibir mensajes instantáneamente de manera fluida y eficiente.

### **Características Principales:**
- **Mensajes en Tiempo Real:** Los mensajes se transmiten instantáneamente entre pestañas sin necesidad de recargar la página, gracias a la API `BroadcastChannel`.
- **Interfaz Intuitiva:** Un diseño limpio y moderno que facilita la interacción del usuario. El sistema se adapta a la interacción del usuario, mostrando los mensajes enviados por él de manera destacada.
- **Estado del Botón de Envío:** El botón de envío se encuentra deshabilitado cuando el campo de mensaje está vacío, evitando la posibilidad de enviar mensajes vacíos. El botón se habilita automáticamente cuando el usuario comienza a escribir, mejorando la experiencia de usuario.
- **Estilo Responsivo:** El chat se adapta perfectamente a diferentes tamaños de pantalla, ofreciendo una experiencia óptima tanto en dispositivos móviles como de escritorio.

### **Tecnologías Utilizadas:**
- **HTML5:** Estructura básica del chat.
- **CSS3:** Estilos modernos para crear una interfaz de usuario atractiva y funcional.
- **JavaScript:** Lógica interactiva para gestionar el chat, los mensajes en tiempo real y la habilitación/deshabilitación del botón de envío.
- **BroadcastChannel API:** Permite la comunicación en tiempo real entre varias pestañas de navegador.

### **Cómo Funciona:**
1. **Comunicación entre Pestañas:** Cuando un usuario envía un mensaje, este se publica en un canal compartido utilizando `BroadcastChannel`, lo que permite que todos los demás usuarios en pestañas diferentes reciban el mensaje al instante.
2. **Interactividad del Botón:** El botón de envío solo estará habilitado cuando el campo de texto contenga algún contenido, asegurando que no se envíen mensajes vacíos.

### **Uso:**
1. Abre múltiples pestañas del navegador en la misma página para simular diferentes usuarios.
2. Comienza a escribir en uno de los campos de mensaje y observa cómo los mensajes aparecen en las otras pestañas en tiempo real.

### **Instalación:**
1. Clona este repositorio en tu máquina local.
2. Abre el archivo `index.html` en tu navegador para comenzar a usar el chat.

```bash
git clone https://github.com/tuusuario/chat-en-tiempo-real.git
cd chat-en-tiempo-real
open index.html
