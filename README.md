# Villa Peñas · Consumo de API REST

Examen práctico de Programación III · Universidad Nacional, Sede Regional Chorotega, Campus Nicoya
Docente: Ing. Gloriana Peña Ramírez

Aplicación web desarrollada con **React + TypeScript + Vite** que consulta la API REST pública de Villa Peñas y muestra sus paquetes y servicios adicionales, sin modificar el backend.

- **Estudiante:** Juan Diego Carmona Duarte
- **Repositorio:** https://github.com/ellerucks/villa-penas-app-exam
- **API:** https://villa-penas-production.up.railway.app
- **Documentación Swagger:** https://villa-penas-production.up.railway.app/api/docs

## Cómo iniciar el proyecto

Requisitos: Node.js 18 o superior y npm.

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ellerucks/villa-penas-app-exam.git
   cd villa-penas-app-exam
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear el archivo de entorno copiando el ejemplo:
   ```bash
   cp .env.example .env
   ```
   En Windows (PowerShell): `copy .env.example .env`. El archivo contiene:
   ```
   VITE_API_URL=https://villa-penas-production.up.railway.app
   ```
4. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abrir http://localhost:5173. El puerto está fijo en 5173 porque es uno de los orígenes autorizados por CORS en la API.

Para verificar tipos: `npx tsc --noEmit -p tsconfig.app.json`.

## Endpoints consumidos

Todos son operaciones **GET públicas** que, según Swagger, no requieren credenciales. No se usa ningún endpoint con autenticación.

| Endpoint | Datos relevantes | Uso en la interfaz |
|---|---|---|
| `GET /public/paquetes` | nombre, descripción, precio en colones, servicios incluidos | Catálogo con búsqueda por texto y filtro por precio máximo |
| `GET /public/paquetes/{id}` | datos del paquete y sus servicios con descripción y