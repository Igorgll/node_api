// Database queries

export const queries = {
  createDatabase:
    "IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'ClientsDb') BEGIN CREATE DATABASE [ClientsDb] END",
  createUsersTable:
    "IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='tb_adminUsers' and xtype='U') BEGIN CREATE TABLE tb_adminUsers (Id INT PRIMARY KEY IDENTITY (1, 1), Name VARCHAR(50), Email VARCHAR(50), Password VARCHAR(255)) END",
  createClientsTable:
    "IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='tb_clients' and xtype='U') BEGIN CREATE TABLE tb_clients (Id INT PRIMARY KEY IDENTITY (1, 1), Name VARCHAR(50), lastName VARCHAR(50), Email VARCHAR(50), Address VARCHAR(255), postalCode VARCHAR(50)) END",
  getAllClients: "SELECT * FROM tb_clients",
  createNewClient:
    "INSERT INTO tb_clients (name, lastName, email, address, postalCode) VALUES (@name, @lastName, @email, @address, @postalCode)",
  getClientById: "SELECT * FROM tb_clients WHERE Id = @Id",
  getClientByEmail: "SELECT * FROM tb_clients WHERE email = @email",
  deleteClientById: "DELETE FROM tb_clients WHERE Id = @Id",
  deleteClientByEmail: "DELETE FROM tb_clients WHERE Email = @email",
  updateClientById:
    "UPDATE tb_clients SET Name = @name, LastName = @lastName, Email = @email, Address = @address, PostalCode = @postalCode WHERE Id = @Id",
  getAllUsers: "SELECT * FROM tb_adminUsers",
  signUpUser:
    "INSERT INTO tb_adminUsers (name, email, password) VALUES (@name, @email, @password)",
  userLogin:
    "INSERT INTO tb_adminUsers (email, password) VALUES (@email, @password)",
  getUserByEmail: "SELECT * FROM tb_adminUsers WHERE email = @email",
};

export default queries;
