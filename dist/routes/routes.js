"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _clients = require("../controllers/clients.controller");

var _users = require("../controllers/users.controller");

var router = (0, _express.Router)(); //CLIENTS

router.get("/clients", _clients.getClients); //GET ALL Route

router.post("/clients", _clients.createNewClient); // Create new client route

router.get("/clients/:id", _clients.getClientById); // Get Client By Id route

router.put("/clients/:id", _clients.updateClientById); //Update Client By Id

router.get("/clients/email/:email", _clients.getClientByEmail); // Get client by email

router["delete"]("/clients/:id", _clients.deleteClientById); // Delete Cliente By Id Route

router["delete"]("/clients/email/:email", _clients.deleteClientByEmail); // Delete Cliente By Email Route
//USERS

router.get("/users", _users.getUsers); // Get all users

router.post("/users/signup", _users.signUpUser); // Create new User

var _default = router;
exports["default"] = _default;