// Database queries

export const queries = {
    createDatabase: "USE [master]",
    createUsersTable:
    "USE [master] IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='tb_adminUsers' and xtype='U') BEGIN CREATE TABLE tb_adminUsers (Id INT PRIMARY KEY IDENTITY (1, 1), Name VARCHAR(50), Email VARCHAR(50), Password VARCHAR(255)) END",
  createClientsTable:
    "USE [master] IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='tb_clients' and xtype='U') BEGIN CREATE TABLE tb_clients (Id INT PRIMARY KEY IDENTITY (1, 1), Name VARCHAR(50), lastName VARCHAR(50), Email VARCHAR(50), Address VARCHAR(255), postalCode VARCHAR(50)) END",
    populateClientsTable: "USE [master] INSERT INTO [dbo].tb_clients (Name, lastName, City, Address, postalCode) VALUES ('Renato', 'Lima', 'São Paulo', 'Rua 03 de Outubro', '08090-284') INSERT INTO [dbo].tb_clients (Name, lastName, City, Address, postalCode) VALUES ('Vitória', 'Rodrigues', 'São Paulo', 'Rua 17 de Janeiro', '05706-305') INSERT INTO [dbo].tb_clients (Name, lastName, City, Address, postalCode) VALUES ('Sofia', 'Barbosa ', 'São Paulo', 'Rua 23 de Novembro', '08240-001') INSERT INTO [dbo].tb_clients (Name, lastName, City, Address, postalCode) VALUES ('Pedro', 'Costa', 'São Paulo', 'Rua 5 de Outubro', '04849-309') INSERT INTO [dbo].tb_clients (Name, lastName, City, Address, postalCode) VALUES ('Murilo', 'Oliveira', 'São Paulo', 'Rua Abaetetuba', '06409-100') INSERT INTO [dbo].tb_clients (Name, lastName, City, Address, postalCode) VALUES ('Renato', 'Lima', 'São Paulo', 'Rua Alagoinha', '06463-170') INSERT INTO [dbo].tb_clients (Name, lastName, City, Address, postalCode) VALUES ('Gabriela', 'Correia', 'Rio de Janeiro', 'Travessa 1º de maio', '24310-550') INSERT INTO [dbo].tb_clients (Name, lastName, City, Address, postalCode) VALUES ('Danilo', 'Alvez', 'Rio de Janeiro', 'Travessa Alberto Coelho', '24110-180') INSERT INTO [dbo].tb_clients (Name, lastName, City, Address, postalCode) VALUES ('Danilo', 'Azevedo', 'Rio de Janeiro', 'Alameda Alcides', '24230-120') INSERT INTO [dbo].tb_clients (Name, lastName, City, Address, postalCode) VALUES ('Leila', 'Sousa', 'Florianópolis', 'Travessa 12 de Dezembro', '88058-115') INSERT INTO [dbo].tb_clients (Name, lastName, City, Address, postalCode) VALUES ('Manuela', 'Cunha', 'Florianópolis', 'Servidão A Caminho das Dunas', '88063-165')",
  getAllClients: "SELECT * FROM tb_clients",
  createNewClient:
    "USE [master] INSERT INTO tb_clients (name, lastName, city, address, postalCode) VALUES (@name, @lastName, @city, @address, @postalCode)",
  getClientById: "SELECT * FROM tb_clients WHERE Id = @Id",
  deleteClientById: "DELETE FROM tb_clients WHERE Id = @Id",
  updateClientById:
    "UPDATE tb_clients SET Name = @name, LastName = @lastName, City = @city, Address = @address, PostalCode = @postalCode WHERE id = @id",
  getAllUsers: "SELECT * FROM tb_adminUsers",
  signUpUser:
    "INSERT INTO tb_adminUsers (name, email, password) VALUES (@name, @email, @password)",
  userLogin:
    "INSERT INTO tb_adminUsers (email, password) VALUES (@email, @password)",
  getUserByEmail: "SELECT * FROM tb_adminUsers WHERE email = @email",
};

export default queries;
