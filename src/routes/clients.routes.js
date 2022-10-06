import { request, Router } from "express";
import { 
    createNewClient, 
    getClients, 
    getClientById, 
    getClientByEmail, 
    deleteClientById, 
    updateClientById, 
    deleteClientByEmail,
    signUpUser } from "../controllers/clients.controller";

import { getConnection, queries, sql } from "../database";

const router = Router()

router.get('/clients', getClients) //GET ALL Route

router.post('/clients', createNewClient) // Create new client route

router.get('/clients/:id', getClientById) // Get Client By Id route

router.put('/clients/:id', updateClientById) //Update Client By Id

router.get('/clients/email/:email', getClientByEmail) // Get client by email

router.delete('/clients/:id', deleteClientById) // Delete Cliente By Id Route

router.delete('/clients/email/:email', deleteClientByEmail) // Delete Cliente By Email Route

// SIGN UP, LOG IN
const bcrypt = require('bcrypt');

router.post('/clients/signup', async (request, response) => {
    const {email, password, userType} = request.body;
    console.log(password)
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword)
    
    try {
        const pool = await getConnection()
            await pool
            .request()
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, hashedPassword)
            .input('userType', sql.Char, userType)
            .query(queries.signUpUser)
    
        } catch(e) {
            console.log(e);
            response.status(500).send('Bad Request');
        }
    
        response.json({email, hashedPassword, userType})
})

export default router