import { Router } from "express";
import { createNewClient, getClients, getClientById, getClientByEmail, deleteClientById, updateClientById, deleteClientByEmail } from "../controllers/clients.controller";

const router = Router()

router.get('/clients', getClients) //GET ALL Route

router.post('/clients', createNewClient) // Create new client route

router.get('/clients/:id', getClientById) // Get Client By Id route

router.put('/clients/:id', updateClientById) //Update Client By Id

router.get('/clients/email/:email', getClientByEmail) // Get client by email

router.delete('/clients/:id', deleteClientById) // Delete Cliente By Id Route

router.delete('/clients/email/:email', deleteClientByEmail) // Delete Cliente By Email Route

export default router