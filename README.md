# backend-app-buscador-de-terrenos
## Tecnologías usadas
- node.js/express
- Json web token
## Librerias usadas
- Mongoose
## Base de datos no relacional
- MongoDB
# Endpoints
| Método | Description | Route |
| ------------- | ---------- | ------------- |
| post  | Login | /api/login  |
| get | Obtener terrenos | /api/terrenos |
| post | Publicar terreno  | /api/terrenos |

## variable de entorno
```bash
MONGO_URI = mongodb://madays:madays@fav-shard-00-00.ckbnd.mongodb.net:27017,fav-shard-00-01.ckbnd.mongodb.net:27017,fav-shard-00-02.ckbnd.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-10a5jy-shard-0&authSource=admin&retryWrites=true&w=majority
PORT = 4000
JWT_KEY = '123dlkfvhsk.dfv/**'
```
## Api backend producción
https://busca-terrenos.herokuapp.com

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.