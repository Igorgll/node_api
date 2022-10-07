import express from "express";
import config from './config';
import routes from './routes/routes';

const app = express()

//Settings
app.set('port', config.port)

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(routes)

export default app