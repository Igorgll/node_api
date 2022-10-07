"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queries = void 0;
// Database queries
var queries = {
  getAllClients: 'SELECT * FROM tb_clients',
  createNewClient: 'INSERT INTO tb_clients (name, lastName, email, address, postalCode) VALUES (@name, @lastName, @email, @address, @postalCode)',
  getClientById: 'SELECT * FROM tb_clients WHERE Id = @Id',
  getClientByEmail: 'SELECT * FROM tb_clients WHERE Email = @email',
  deleteClientById: 'DELETE FROM tb_clients WHERE Id = @Id',
  deleteClientByEmail: 'DELETE FROM tb_clients WHERE Email = @email',
  updateClientById: 'UPDATE tb_clients SET Name = @name, LastName = @lastName, Email = @email, Address = @address, PostalCode = @postalCode WHERE Id = @Id',
  getAllUsers: 'SELECT * FROM tb_adminUsers',
  signUpUser: 'INSERT INTO tb_adminUsers (name, email, password) VALUES (@name, @email, @password)' // checkUserInDatabase: 'SELECT * FROM tb_clients WHERE email = @email'

};
exports.queries = queries;