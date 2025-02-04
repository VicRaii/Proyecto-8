# Proyecto-8

## Descripción

Este proyecto es una aplicación desarrollada en Node.js que permite gestionar el almacenamiento de imágenes y su organización en carpetas definidas por el usuario mediante Cloudinary.

## Tecnologías Utilizadas

- Node.js
- Cloudinary para almacenamiento de imágenes
- Multer para gestión de archivos
- Express para el manejo de rutas
- Vercel para despliegue

## Requisitos Previos

Antes de empezar, asegúrate de tener instalado:

- Node.js (versión recomendada: 14 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/VicRaii/Proyecto-8.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd Proyecto-8
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

   ```env
   DB_URL=mongodb+srv://VM-Project8:riK9ltfhRTgs4Q8W@cluster0.8zjoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=dsaoiwejrkldsjkjnvpo
   CLOUD_NAME=dg9w0xopc
   API_KEY=432356197485363
   API_SECRET=3WG5q-3Zsh8Yn5M6QmkKDA-yKsg
   ```

2. Revisa el archivo `vercel.json` para configuraciones adicionales de despliegue.

## Uso

1. Para iniciar el servidor local, ejecuta:

   ```bash
   npm run dev
   ```

2. Accede a la aplicación en `http://localhost:3000` para verificar su funcionamiento.

## Endpoints

### **Controladores Principales y Endpoints:**

#### **1. Subida de Imágenes**

- **POST /upload**: Sube una imagen al almacenamiento de Cloudinary.
  - Parámetros:
    - `image`: archivo de imagen en el cuerpo del formulario.
    - `folder` (opcional): nombre de la carpeta donde se almacenará la imagen.
  - **Respuesta:** Devuelve la URL de la imagen subida o un mensaje de error.

#### **2. Listado de Imágenes**

- **GET /images/:folder**: Obtiene una lista de URLs de las imágenes dentro de la carpeta especificada.
  - Parámetro: `folder` en la ruta.
  - **Respuesta:** Devuelve un array de URLs de las imágenes.

#### **3. Eliminación de Imagen**

- **DELETE /image/:id**: Elimina una imagen en Cloudinary.
  - Parámetro: `id` de la imagen en la ruta.
  - **Respuesta:** Confirmación de eliminación o mensaje de error.

## Despliegue en Vercel

1. Para desplegar el proyecto en Vercel, ejecuta:
   ```bash
   vercel
   ```
2. Configura las variables de entorno en Vercel según el archivo `.env` local.
