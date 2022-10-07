"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _clients = require("../controllers/clients.controller");

var router = (0, _express.Router)();
router.get('/clients', _clients.getClients); //GET ALL Route

router.post('/clients', _clients.createNewClient); // Create new client route

router.put('/clients/:id', _clients.updateClientById);
router.get('/clients/:id', _clients.getClientById); // Get Client By Id route

router["delete"]('/clients/:id', _clients.deleteClientById); // Delete Cliente By Id Route

var _default = router;
exports["default"] = _default;