import { response } from "express";
import sql from "mssql";
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

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    const result = await pool.request().query(queries.createUsersTable);
    pool.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
    response.json(result.recordset);
    return pool;
  } catch (error) {
    console.log(error);
  }
}

export default { sql, getConnection };
