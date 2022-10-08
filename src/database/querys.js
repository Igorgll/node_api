// Database queries

export const queries = {
  createUsersTable:
    "CREATE TABLE tb_users (Id int primary key AUTO_INCREMENT, Name VARCHAR(50), Email VARCHAR(50), Password VARCHAR(255))",
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
