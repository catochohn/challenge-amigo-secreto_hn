# 🎁 Amigo Secreto

Una aplicación web simple y divertida para organizar sorteos de amigo secreto. Permite agregar nombres de amigos a una lista y realizar un sorteo aleatorio para determinar quién será el amigo secreto.

## 🌟 Características

- ✅ Agregar nombres de amigos a una lista
- ✅ Validación de entrada (no permite nombres vacíos)
- ✅ Visualización en tiempo real de la lista de participantes
- ✅ Sorteo aleatorio de amigo secreto
- ✅ Interfaz responsive y atractiva
- ✅ Soporte para agregar nombres con la tecla Enter

## 🚀 Funcionalidades

### Agregar Amigos

- Escribe el nombre de un amigo en el campo de texto
- Haz clic en "Añadir" o presiona Enter
- El nombre se agregará automáticamente a la lista visible

### Validación

- Si intentas agregar un nombre vacío, aparecerá una alerta
- El campo se limpia automáticamente después de agregar un nombre

### Sorteo

- Haz clic en "Sortear amigo" para seleccionar aleatoriamente un participante
- El resultado se mostrará con un mensaje destacado
- Si no hay nombres en la lista, aparecerá una alerta informativa

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura del documento
- **CSS3**: Estilos y diseño responsive
- **JavaScript**: Lógica de la aplicación
- **Google Fonts**: Tipografías Inter y Merriweather

## 📁 Estructura del Proyecto

```
challenge-amigo-secreto_hn/
├── index.html          # Estructura HTML principal
├── style.css           # Estilos CSS
├── app.js              # Lógica JavaScript
├── assets/             # Recursos gráficos
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
└── README.md           # Documentación del proyecto
```

## 🔧 Instalación y Uso

### Prerrequisitos

- Un navegador web moderno
- Servidor local (opcional, para desarrollo)

### Pasos para ejecutar

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/catochohn/challenge-amigo-secreto_hn
   cd challenge-amigo-secreto_hn
   ```

2. **Abre el proyecto**

   - Opción 1: Abre `index.html` directamente en tu navegador
   - Opción 2: Usa un servidor local

     ```bash
     # Con Python 3
     python -m http.server 8000

     # Con Node.js (http-server)
     npx http-server
     ```

3. **¡Listo para usar!**
   - Agrega nombres de amigos
   - Realiza el sorteo
   - ¡Disfruta organizando tu amigo secreto!

## 💻 Cómo Usar la Aplicación

1. **Agregar Participantes**:

   - Escribe el nombre en el campo "Escribe un nombre"
   - Presiona "Añadir" o la tecla Enter
   - Repite para todos los participantes

2. **Realizar Sorteo**:
   - Una vez que tengas todos los nombres
   - Haz clic en "Sortear amigo"
   - El resultado aparecerá destacado en pantalla

## 🧠 Conceptos de Programación Aplicados

Este proyecto pone en práctica:

- **Variables**: Almacenamiento del array de amigos
- **Funciones**: Modularización del código en funciones específicas
- **Arrays**: Gestión de la lista de participantes
- **Condicionales**: Validaciones y control de flujo
- **Bucles**: Iteración sobre el array para mostrar la lista
- **Manipulación del DOM**: Interacción con elementos HTML
- **Eventos**: Manejo de clics y teclas
- **Números Aleatorios**: Generación del sorteo

## 🎨 Personalización

Puedes personalizar la aplicación modificando:

- **Colores**: Cambia las variables CSS en `:root`
- **Fuentes**: Modifica las importaciones de Google Fonts
- **Mensajes**: Actualiza los textos de alerta y resultados
- **Estilos**: Ajusta las clases CSS según tus preferencias

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar el proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 Posibles Mejoras Futuras

- [ ] Historial de sorteos anteriores
- [ ] Opción para excluir ganadores previos
- [ ] Exportar lista de participantes
- [ ] Animaciones para el sorteo
- [ ] Modo oscuro
- [ ] Sonidos de notificación

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado como parte de un desafío de lógica de programación.

---

¡Disfruta organizando tus intercambios de regalos con Amigo Secreto! 🎁✨
