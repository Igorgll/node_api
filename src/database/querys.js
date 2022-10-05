// Database queries

export const queries =  {
    getAllClients: 'SELECT * FROM tb_clients',
    createNewClient: 'INSERT INTO tb_clients (name, lastName, address, postalCode) VALUES (@name, @lastName, @address, @postalCode)',
    getClientById: 'SELECT * FROM tb_clients WHERE Id = @Id',
    deleteClient: 'DELETE FROM tb_clients WHERE Id = @Id',
    updateClientById: 'UPDATE tb_clients SET Name = @name, LastName = @lastName, Address = @address, PostalCode = @postalCode WHERE Id = @Id',
}