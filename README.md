# 🏥 Sistema de Gestión de Especialistas Médicos - Backend (AdonisJS)

Este es el componente de backend para el "Sistema de Gestión de Especialistas Médicos" de la clínica "Salud Vital". Implementa una API RESTful para gestionar la información de los especialistas y sus disponibilidades, incluyendo operaciones CRUD completas y un sistema de soft delete.

---

## 🚀 Tecnologías Utilizadas

* **Node.js**: Entorno de ejecución JavaScript.
* **AdonisJS**: Framework web para Node.js.
* **MySQL**: Base de datos relacional para persistencia de datos.
* **Lucid ORM**: ORM de AdonisJS para interactuar con la base de datos.
* **Validadores de AdonisJS**: Para asegurar la integridad y consistencia de los datos.

---

## ✨ Características Implementadas

* **CRUD Completo para Especialistas**:
    * Creación de nuevos especialistas con validaciones.
    * Visualización individual y listado de todos los especialistas (activos).
    * Actualización de datos de especialistas y sus disponibilidades.
    * Soft delete (borrado lógico) de especialistas.
* **Gestión de Días y Horarios de Atención**:
    * Asignación dinámica de múltiples días y rangos horarios por especialista.
    * Validación de solapamiento de horarios (a implementar si aún no está en el backend).
* **Soft Delete con Recuperación**:
    * Los especialistas eliminados se marcan como inactivos, no se borran de la base de datos.
    * API para listar especialistas inactivos.
    * API para restaurar especialistas inactivos.
    * API para eliminar especialistas permanentemente.

---

## ⚙️ Configuración y Ejecución (Desarrollo)

Sigue estos pasos para levantar el proyecto de backend:

1.  **Clonar el Repositorio:**
    ```bash
    git clone <URL_DE_TU_REPOSITORIO_BACKEND>
    cd nombre-del-repositorio-backend
    ```

2.  **Instalar Dependencias:**
    ```bash
    npm install
    # o yarn install
    ```

3.  **Configurar la Base de Datos:**
    * Asegúrate de tener un servidor MySQL funcionando.
    * Crea una base de datos para el proyecto (ej. `salud_vital_db`).
    * Copia el archivo `.env.example` a `.env`:
        ```bash
        cp .env.example .env
        ```
    * Edita el archivo `.env` y configura tus credenciales de MySQL:
        ```env
        DB_CONNECTION=mysql
        MYSQL_HOST=127.0.0.1
        MYSQL_PORT=3306
        MYSQL_USER=ROOT
        MYSQL_PASSWORD=123456
        MYSQL_DB_NAME=salud_vital_db
        ```

4.  **Ejecutar Migraciones:**
    Esto creará las tablas necesarias en tu base de datos.
    ```bash
    node ace migration:run
    ```
    *(Opcional: Si tienes seeders para datos de prueba, puedes ejecutar `node ace db:seed`)*

5.  **Iniciar el Servidor de Desarrollo:**
    ```bash
    node ace serve --watch
    ```
    El backend estará disponible en `http://localhost:3333` (o el puerto que configures). La API para especialistas estará bajo el prefijo `/api/especialistas` (ej. `http://localhost:3333/api/especialistas`).

---

## 🤝 Autor

* **[DANNA VALENTINA GOMEZ ]**
* Ing. Giovanny Gonzalez, Esp. Ped., Mg. Ing. Software. (Instructor)
* SENA - ADSO Ficha 2863722

---

## 📅 Fecha de Entrega

7 de Junio de 2025, 11:59 AM (-05)
