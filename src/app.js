import express from "express";
import config from './config';
import routes from './routes/routes';

const app = express()

//Settings
// app.set('port', config.port)
app.listen(process.env.PORT || 3000);

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(routes)

export default app