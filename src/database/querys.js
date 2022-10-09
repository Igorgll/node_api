// Database queries

export const queries = {
    createDatabase: "USE master",
    createUsersTable:
    "IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='tb_adminUsers' and xtype='U') BEGIN CREATE TABLE tb_adminUsers (Id INT PRIMARY KEY IDENTITY (1, 1), Name VARCHAR(50), Email VARCHAR(50), Password VARCHAR(255)) END",
  createClientsTable:
    "IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='tb_clients' and xtype='U') BEGIN CREATE TABLE tb_clients (Id INT PRIMARY KEY IDENTITY (1, 1), Name VARCHAR(50), lastName VARCHAR(50), Email VARCHAR(50), Address VARCHAR(255), postalCode VARCHAR(50)) END",
  populateClientsTable: "INSERT INTO tb_clients (Name, lastName, Email, Address, postalCode) VALUES ('Renato', 'Lima', 'renatolima@email.com', 'Rua Tomás Sepé', '06711-270') INSERT INTO tb_clients (Name, lastName, Email, Address, postalCode) VALUES ('Vitória', 'Rodrigues', 'VitoriaFernandesRodrigues@email.com', 'Rua São Francisco de Assis', '49087-000') INSERT INTO tb_clients (Name, lastName, Email, Address, postalCode) VALUES ('Sofia', 'Barbosa ', 'SofiaBarbosa@email.com', 'Rua Coronel Joaquim de Freitas', '29123-120') INSERT INTO tb_clients (Name, lastName, Email, Address, postalCode) VALUES ('Pedro', 'Costa', 'PedroCosta@email.com', 'Rua João Eleutério da Silva', '52090-355') INSERT INTO tb_clients (Name, lastName, Email, Address, postalCode) VALUES ('Murilo', 'Oliveira', 'MuriloOliveira@email.com', 'Rua Santa Teresa de Ávila', '87703-220') INSERT INTO tb_clients (Name, lastName, Email, Address, postalCode) VALUES ('Renato', 'Lima', 'renatolima@email.com', 'Rua Tomás Sepé', '06711-270') INSERT INTO tb_clients (Name, lastName, Email, Address, postalCode) VALUES ('Gabriela', 'Correia', 'GabrielaCorreia@email.com', 'Rua Pará', '86804-250') INSERT INTO tb_clients (Name, lastName, Email, Address, postalCode) VALUES ('Danilo', 'Alvez', 'daniloAlvez@email.com', 'Rua Barbosa de Souza', '41422-12') INSERT INTO tb_clients (Name, lastName, Email, Address, postalCode) VALUES ('Danilo', 'Azevedo', 'DaniloAzevedo@email.com', 'Rua Nove', '27524-100') INSERT INTO tb_clients (Name, lastName, Email, Address, postalCode) VALUES ('Leila', 'Sousa', 'LeilaSousa@email.com', 'Rua Dimas Monteiro da Silva', '13098-796') INSERT INTO tb_clients (Name, lastName, Email, Address, postalCode) VALUES ('Manuela', 'Cunha', 'ManuelaCunha@email.com', 'Rua Dona Clara', '25570-840')",
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
