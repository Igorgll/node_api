import { response } from "express";
import config from "../config.js";
import queries from "./querys.js";

const dbSettings = {
  //Settings to connect to the database
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,

  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export default dbSettings;
