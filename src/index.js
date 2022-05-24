const app = require('./app')

const createDbConnection = require('./config/databaseConfig')
const dotenv = require('dotenv');
dotenv.config();
createDbConnection(`${process.env.MONGO_URI}`);

app.listen(process.env.PORT, () => console.log(`Servidor en el puerto ${process.env.PORT}`))




