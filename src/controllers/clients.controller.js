import queries from "../database/querys.js";
import dbSettings from "../database/connection.js";
import sql from "mssql";

//Clients
export const getClients = async (request, response) => {
  //Get all clients
  try {
    await sql.connect(dbSettings);
    const result = await sql.query(queries.getAllClients);

    if (result.recordset.length < 1) {
      // Check if clients list is empty
      response.send("Empty list");
    } else {
      response.json(result.recordset);
    }
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
};

export const createNewClient = async (request, response) => {
  //Create new client method
  const { name, lastName, email, address, postalCode } = request.body;

  //Validating null fields
  if (
    name == null ||
    lastName == null ||
    email == null ||
    address == null ||
    postalCode == null
  ) {
    return response
      .status(400)
      .json({ msg: "Bad Request. Please fill out fields." });
  }

  try {
    const pool = await sql.connect(dbSettings);
    const clientExistResult = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query(queries.getClientByEmail);
    if (clientExistResult.recordset && clientExistResult.recordset.length > 0) {
      response.send("Client already registered.");
    } else {
      await pool
        .request()
        .input("name", sql.VarChar, name)
        .input("lastName", sql.VarChar, lastName)
        .input("email", sql.VarChar, email)
        .input("address", sql.VarChar, address)
        .input("postalCode", sql.VarChar, postalCode)
        .query(queries.createNewClient);

      response.json({ name, lastName, email, address, postalCode });
    }
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
};

export const getClientById = async (request, response) => {
  //Get Method to get client by Id
  const { id } = request.params;

  const pool = await sql.connect(dbSettings);
  const result = await pool
    .request()
    .input("Id", sql.Int, id)
    .query(queries.getClientById);

  response.send(result.recordset[0]);
};

export const getClientByEmail = async (request, response) => {
  //Get method to get client by Email
  const { email } = request.params;

  const pool = await sql.connect(dbSettings);
  const result = await pool
    .request()
    .input("Email", sql.VarChar, email)
    .query(queries.getClientByEmail);

  response.send(result.recordset[0]);
};

export const deleteClientById = async (request, response, err) => {
  //Delete Method to delete client by Id
  const { id } = request.params;

  try {
    const pool = await sql.connect(dbSettings);
    const result = await pool
      .request()
      .input("Id", sql.Int, id)
      .query(queries.deleteClientById);
    response.send("Client deleted.");
    if (err) {
      return;
    } else {
      response.send(result);
    }
  } catch (err) {
    console.log(err);
    response.status(500);
  }
};

export const deleteClientByEmail = async (request, response, err) => {
  //Delete Method to delete client by Email
  const { email } = request.params;

  try {
    const pool = await sql.connect(dbSettings);
    const result = await pool
      .request()
      .input("Email", sql.VarChar, email)
      .query(queries.deleteClientByEmail);
    response.send("Client deleted.");
    if (err) {
      return;
    } else {
      response.send(result);
    }
  } catch (err) {
    console.log(err);
    response.status(500);
  }
};

export const updateClientById = async (request, response) => {
  const { name, lastName, email, address, postalCode } = request.body;
  const { id } = request.params;

  if (
    name == null ||
    lastName == null ||
    email == null ||
    address == null ||
    postalCode == null
  ) {
    return response
      .status(400)
      .json({ msg: "Bad Request. Please fill out fields." });
  }

  const pool = await sql.connect(dbSettings);
  await pool
    .request()
    .input("name", sql.VarChar, name)
    .input("lastName", sql.VarChar, lastName)
    .input("email", sql.VarChar, email)
    .input("address", sql.VarChar, address)
    .input("postalCode", sql.VarChar, postalCode)
    .input("Id", sql.Int, id)
    .query(queries.updateClientById);

  response.json("User updated.");
  response.json({ name, lastName, email, address, postalCode });
};
