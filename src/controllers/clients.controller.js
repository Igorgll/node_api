import { getConnection, sql, queries } from '../database';

//CLIENTS
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
    const { name, lastName, email, address, postalCode } = request.body

    //validating null fields
    if(name == null || lastName == null || email == null ||address == null || postalCode == null) {
        return response.status(400).json({msg: 'Bad Request. Please fill out fields.'})
    }

   try {
        const pool = await getConnection()
        await pool
        .request()
        .input('name', sql.VarChar, name)
        .input('lastName', sql.VarChar, lastName)
        .input('email', sql.VarChar, email)
        .input('address', sql.VarChar, address)
        .input('postalCode', sql.VarChar, postalCode)
        .query(queries.createNewClient)

        response.json({name, lastName, email, address, postalCode})
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
    .query(queries.deleteClientById)

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
    const { name, lastName, email, address, postalCode } = request.body
    const { id } = request.params
    
    if(name == null || lastName == null || email == null || address == null || postalCode == null) {
        return response.status(400).json({msg: 'Bad Request. Please fill out fields.'})
    }

    const pool = await getConnection()
    await pool
        .request()
        .input('name', sql.VarChar, name)
        .input('lastName', sql.VarChar, lastName)
        .input('email', sql.VarChar, email)
        .input('address', sql.VarChar, address)
        .input('postalCode', sql.VarChar, postalCode)
        .input('Id', id)
        .query(queries.updateClientById)

    response.json({ name, lastName, email, address, postalCode })

}