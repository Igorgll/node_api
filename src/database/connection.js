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

//Sql Server connection
pool.connect(error => {
  if(error) {
    console.log(error);
  }else {
    pool.request().query(queries.createDatabase) // Creating database if it doesn't exist
    console.log("Database created!")
    pool.request().query(queries.createUsersTable) // Creating users table if doesn't exist 
    pool.request().query(queries.createClientsTable) // Creating clients table if doesn't exist
    pool.request().query(queries.populateClientsTable) // Populate clients table
  }
})

export default dbSettings;
