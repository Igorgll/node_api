import express from "express";
import config from './config.js';
import routes from './routes/routes.js';

const app = express()

//Settings
app.set('port', config.port)

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(routes)

export default app