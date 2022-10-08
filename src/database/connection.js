import config from "../config.js";
import sql from "mssql";
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

const pool = await sql.connect(dbSettings);

//CREATE DATABASE IF IT DOESN'T EXIST
pool.connect(error => {
  if(error) {
    console.log(error);
  }else {
    pool.request().query(queries.createDatabase)
    pool.request().query(queries.createUsersTable)
    pool.request().query(queries.createClientsTable)
  }
})

export default dbSettings;
