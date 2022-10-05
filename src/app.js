import express from "express";
import config from './config';

const app = express()

//Settings
app.set('port', config.port)

export default app