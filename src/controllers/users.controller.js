import { getConnection, sql, queries } from '../database';

//ADMIN USERS
export const getUsers = async (request, response) => { //GET All Users
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getAllUsers)
    
        response.json(result.recordset);
    } 
    catch(error) {
        response.status(500)
        response.send(error.message)
        console.log(error)
    }
};

export const signUpUser = async (request, response) => {
    const bcrypt = require('bcrypt')
    const {name, email, password } = request.body
    const hashedPassword = await bcrypt.hash(password, 10); //encrypted password
    const pool = await getConnection();

    //validating null fields
    if(name == null || email == null || password == null) {
        return response.status(400).json({msg: 'Bad Request. Please fill out fields.'})
    }

    //TODO
    //check if user already exists in the database
    //check if client already exists in the database
    //define cors routes
    //Login with jwt authentication

    try {
      await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("email", sql.VarChar, email)
        .input("password", sql.VarChar, hashedPassword)
        .query(queries.signUpUser);
    } catch (e) {
      console.log(e);
      response.status(500).send("Bad Request");
    }
  
    response.json({ name, email, hashedPassword });
}