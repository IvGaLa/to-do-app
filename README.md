# 😃 Proyecto Funcional 😃

Actualmente el proyecto está en fase funcional aunque es posible que se vayan actualizando algunas cosas o corrigiendo errores.<br />
Agradecemos tu comprensión y cualquier **feedback** que puedas proporcionar.<br /><br />

¡Gracias por tu interés en este proyecto!<br />

# 📝 To Do App

¡Bienvenido a **To Do App**! 🎉 <br />
Esta es una aplicación simple pero poderosa realizada con **React**, diseñada para ayudarte a gestionar tus tareas diarias de manera eficiente.

## 🚀 Tecnologías Utilizadas

- **React** para la interfaz de usuario.
- **Turso** (basado en SQLite) como base de datos.

## ℹ️ Notas Importantes

Ten en cuenta que, en ocasiones, **Turso** puede ir un poco lento, lo que puede causar que la aplicación tarde en cargar los datos.<br />
Si experimentas algún retraso, no te preocupes, es algo que estamos trabajando para mejorar.

## 📦 Instalación y Configuración

Sigue estos sencillos pasos para ver la aplicación en funcionamiento:

1. Clona este repositorio:

```bash
git clone https://github.com/IvGaLa/to-do-app.git
```

2. Crear base de datos en Turso

Crea una base de datos en Turso utilizando tu cuenta. Puedes hacerlo desde el [sitio oficial de Turso](https://turso.tech/).

3. Esquema de la tabla tasks

```sql
CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  createdAt TEXT,
  modifiedAt TEXT,
  finishedAt TEXT
);
```

4. Crea un archivo .env en la raíz del proyecto con los siguientes datos:

```env
   VITE_TURSO_DATABASE_URL=tu_url_de_base_de_datos
   VITE_TURSO_AUTH_TOKEN=tu_token_de_autorizacion
```

5. Instala las dependencias y ejecuta el proyecto

```bash
   npm install
   npm run dev
```

## 🙌 Créditos

Desarrollado por [IvGaLa](https://github.com/IvGaLa/to-do-app).<br />
Si encuentras útil esta aplicación, ¡no dudes en darle una ⭐ al proyecto!<br />
Tu apoyo y feedback son muy apreciados.<br />
