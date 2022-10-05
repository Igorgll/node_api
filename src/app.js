import express from "express";
import config from './config';
import clientsRoutes from './routes/clients.routes';

const app = express()

//Settings
app.set('port', config.port)

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(clientsRoutes)

export default app