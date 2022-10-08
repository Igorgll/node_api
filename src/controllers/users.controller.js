import sql from "mssql";
import dbSettings from "../database/connection.js";
import queries from "../database/querys.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//ADMIN USERS
export const getUsers = async (request, response) => {
  //GET All Users
  try {
    const pool = await sql.connect(dbSettings);
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

//Create New Admin User
export const signUpUser = async (request, response) => {
  const { name, email, password } = request.body;
  const hashedPassword = await bcrypt.hash(password, 10); //encrypted password

  //validating null fields
  if (name == null || email == null || password == null) {
    return response
      .status(400)
      .json({ msg: "Bad Request. Please fill out fields." });
  }

  try {
    const pool = await sql.connect(dbSettings);
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

//jwt login authentication
export const userLogin = async (request, response) => {
  const { email } = request.body;
  const SECRET_TOKEN = "a40b4413c25e179d978340ee7cce3113" //header

  //validating null fields
  if (email == null) {
    return response.status(400).send("Bad Request. Please fill out fields.");
  } else {
    try {
      const pool = await sql.connect(dbSettings);
      const userExistResult = await pool
        .request()
        .input("email", sql.VarChar, email)
        .query(queries.getUserByEmail);
      if (userExistResult.recordset && userExistResult.recordset.length > 0) {
        let user = userExistResult.recordset[0];
        let passwordIsValid = bcrypt.compareSync(
          //compare encrypted password
          request.body.password,
          user.Password, function(err, result) {
            if (err) throw err;
            response.send(result)
          }
          );
        if (passwordIsValid) {
          let token = jwt.sign({ id: user.email }, SECRET_TOKEN, {
            expiresIn: 360,
          });

          await pool
            .request()
            .input("email", sql.VarChar, email)
            .input("password", sql.VarChar, user.Password)
            .query(queries.userLogin);

          response.status(200, "Token sucessfully created.", token);
          response.send({ email, token });
        }
      } else {
        response.send("User not found.");
      }
    } catch (e) {
      console.log(e);
    }
  }
};
