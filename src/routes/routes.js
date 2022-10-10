import { request, Router } from "express";
import {
  createNewClient,
  getClients,
  getClientById,
  getClientByEmail,
  deleteClientById,
  updateClientById,
  deleteClientByEmail,
} from "../controllers/clients.controller.js";

import { getUsers, signUpUser, userLogin } from "../controllers/users.controller.js";
import { SECRET_TOKEN } from "../controllers/users.controller.js";
import cors from 'cors';

const router = Router();

router.get('/', (request, response) => {
  response.send('Server running!')
})

router.use(cors({
  origin: 'http://localhost:4200' //allow origin from front end to access the back end
}));

//Public users routes
router.get("/users", getUsers) // Get all users

router.post("/users/signup", signUpUser) // Create new user

router.post("/users/login", userLogin) // Login User

//Protected clients routes
router.get("/clients", getClients, (request, response) => {
    if (request.headers.authorization !== SECRET_TOKEN) {
      response.status(401).send("Not authorized.")
      return;
    } 
    response.send("You're in!")
}); // Get all clients

router.post("/clients", createNewClient); // Create new client

router.get("/clients/:id", getClientById); // Get client by id

router.put("/clients/:id", updateClientById); // Update client by id

router.get("/clients/email/:email", getClientByEmail); // Get client by email

router.delete("/clients/:id", deleteClientById); // Delete cliente by id route

router.delete("/clients/email/:email", deleteClientByEmail); // Delete cliente by email route

export default router;
