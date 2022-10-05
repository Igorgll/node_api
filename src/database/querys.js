// Database queries

export const queries =  {
    getAllClients: 'SELECT * FROM tb_clients',
    createNewClient: 'INSERT INTO tb_clients (name, lastName, email, password, address, postalCode, userType) VALUES (@name, @lastName, @email, @password ,@address, @postalCode, @userType)',
    getClientById: 'SELECT * FROM tb_clients WHERE Id = @Id',
    getClientByEmail: 'SELECT * FROM tb_clients WHERE Email = @email',
    deleteClientById: 'DELETE FROM tb_clients WHERE Id = @Id',
    deleteClientByEmail: 'DELETE FROM tb_clients WHERE Email = @email',
    updateClientById: 'UPDATE tb_clients SET Name = @name, LastName = @lastName, Email = @email, Password = @password, Address = @address, PostalCode = @postalCode, UserType = @userType WHERE Id = @Id'
}