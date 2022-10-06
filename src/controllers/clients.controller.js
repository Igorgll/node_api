import { request } from 'express';
import { getConnection, sql, querys, queries } from '../database';

export const getClients = async (request, response) => { //GET All Clients
    try {
        const pool = await getConnection()
        const result = await pool.request().query(queries.getAllClients)
    
        response.json(result.recordset);
    } 
    catch(error) {
        response.status(500)
        response.send(error.message)
    }
};

export const createNewClient = async (request, response) => { //Create new client method
    const {name, lastName, email, password, address, postalCode, userType } = request.body

    //validating null fields
    if(name == null || lastName == null || address == null || postalCode == null) {
        return response.status(400).json({msg: 'Bad Request. Please fill out fields.'})
    }

   try {
        const pool = await getConnection()
        await pool
        .request()
        .input('name', sql.VarChar, name)
        .input('lastName', sql.VarChar, lastName)
        .input('email', sql.VarChar, email)
        .input('password', sql.VarChar, password)
        .input('address', sql.VarChar, address)
        .input('postalCode', sql.VarChar, postalCode)
        .input('userType', sql.Char, userType)
        .query(queries.createNewClient)

        response.json({name, lastName, email, password, address, postalCode, userType})
   } catch (error) {
        response.status(500)
        response.send(error.message)
   }
}

export const getClientById = async (request, response) => { //Get Method to get client by Id
    const { id } = request.params

    const pool = await getConnection()
    const result = await pool.request()
    .input('Id', id)
    .query(queries.getClientById)

    response.send(result.recordset[0])
}

export const getClientByEmail = async (request, response) => { //Get Method to get client by Email
    const { email } = request.params

    const pool = await getConnection()
    const result = await pool.request()
    .input('Email', email)
    .query(queries.getClientByEmail)

    response.send(result.recordset[0])
}

export const deleteClientById = async (request, response) => { //Delete Method to delete client by Id
    const { id } = request.params

    const pool = await getConnection()
    const result = await pool.request()
    .input('Id', id)
    .query(queries.deleteClient)

    response.send(result)
}

export const deleteClientByEmail = async (request, response) => { //Delete Method to delete client by Email
    const { email } = request.params

    const pool = await getConnection()
    const result = await pool.request()
    .input('Email', email)
    .query(queries.deleteClientByEmail)

    response.send(result)
}

export const updateClientById = async (request, response) => {
    const { name, lastName, email, password, address, postalCode, userType } = request.body
    const { id } = request.params
    
    if(name == null || lastName == null || address == null || postalCode == null || userType == null) {
        return response.status(400).json({msg: 'Bad Request. Please fill out fields.'})
    }

    const pool = await getConnection()
    await pool
        .request()
        .input('name', sql.VarChar, name)
        .input('lastName', sql.VarChar, lastName)
        .input('email', sql.VarChar, email)
        .input('password', sql.VarChar, password)
        .input('address', sql.VarChar, address)
        .input('postalCode', sql.VarChar, postalCode)
        .input('userType', sql.Char, userType)
        .input('Id', id)
        .query(queries.updateClientById)

    response.json({ name, lastName, email, password, address, postalCode, userType })

}

//SIGN UP USER
export const signUpUser = async (request, response) => {
    const bcrypt = require('bcrypt')
    const {name, email, password, userType } = request.body
    const hashedPassword = await bcrypt.hash(password, 10); //encrypted password
    const pool = await getConnection();

    //validating null fields
    if(name == null || email == null || password == null || userType == null) {
        return response.status(400).json({msg: 'Bad Request. Please fill out fields.'})
    }

    //TODO
    //check if user already exists in the database
    //Login with jwt authentication

    try {
      await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("email", sql.VarChar, email)
        .input("password", sql.VarChar, hashedPassword)
        .input("userType", sql.Char, userType)
        .query(queries.signUpUser);
    } catch (e) {
      console.log(e);
      response.status(500).send("Bad Request");
    }
  
    response.json({ name, email, hashedPassword, userType });
}