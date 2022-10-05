import { Router } from "express";
import { createNewClient, getClients, getClientById, deleteClientById, updateClientById } from "../controllers/clients.controller";

const router = Router()

router.get('/clients', getClients) //GET ALL Route

router.post('/clients', createNewClient) // Create new client route

router.put('/clients/:id', updateClientById)

router.get('/clients/:id', getClientById) // Get Client By Id route

router.delete('/clients/:id', deleteClientById) // Delete Cliente By Id Route

export default router