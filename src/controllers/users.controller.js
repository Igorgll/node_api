import { getConnection, sql, queries } from "../database";

//ADMIN USERS
export const getUsers = async (request, response) => {
  //GET All Users
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllUsers);

    if (result.recordset.length < 0) {
      response.json("Empty list.");
    } else {
      response.json(result.recordset);
    }
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
};

export const signUpUser = async (request, response) => {
  const bcrypt = require("bcrypt");
  const { name, email, password } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10); //encrypted password

  //validating null fields
  if (name == null || email == null || password == null) {
    return response
      .status(400)
      .json({ msg: "Bad Request. Please fill out fields." });
  }

  try {
    const pool = await getConnection();
    const userExistResult = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query(queries.getUserByEmail);
    if (userExistResult.recordset && userExistResult.recordset.length > 0) {
      response.send("User already registered.");
    } else {
      await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("email", sql.VarChar, email)
        .input("password", sql.VarChar, hashedPassword)
        .query(queries.signUpUser);

      response.json({ name, email, hashedPassword });
    }
  } catch (e) {
    response.status(500).send("Bad Request");
  }
};
