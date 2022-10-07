"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClientById = exports.getClients = exports.getClientById = exports.getClientByEmail = exports.deleteClientById = exports.deleteClientByEmail = exports.createNewClient = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

//CLIENTS
var getClients = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.queries.getAllClients);

          case 6:
            result = _context.sent;
            response.json(result.recordset);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            response.status(500);
            response.send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getClients(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getClients = getClients;

var createNewClient = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(request, response) {
    var _request$body, name, lastName, email, address, postalCode, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //Create new client method
            _request$body = request.body, name = _request$body.name, lastName = _request$body.lastName, email = _request$body.email, address = _request$body.address, postalCode = _request$body.postalCode; //validating null fields

            if (!(name == null || lastName == null || email == null || address == null || postalCode == null)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", response.status(400).json({
              msg: 'Bad Request. Please fill out fields.'
            }));

          case 3:
            _context2.prev = 3;
            _context2.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context2.sent;
            _context2.next = 9;
            return pool.request().input('name', _database.sql.VarChar, name).input('lastName', _database.sql.VarChar, lastName).input('email', _database.sql.VarChar, email).input('address', _database.sql.VarChar, address).input('postalCode', _database.sql.VarChar, postalCode).query(_database.queries.createNewClient);

          case 9:
            response.json({
              name: name,
              lastName: lastName,
              email: email,
              address: address,
              postalCode: postalCode
            });
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](3);
            response.status(500);
            response.send(_context2.t0.message);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[3, 12]]);
  }));

  return function createNewClient(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createNewClient = createNewClient;

var getClientById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(request, response) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            //Get Method to get client by Id
            id = request.params.id;
            _context3.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context3.sent;
            _context3.next = 6;
            return pool.request().input('Id', id).query(_database.queries.getClientById);

          case 6:
            result = _context3.sent;
            response.send(result.recordset[0]);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getClientById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getClientById = getClientById;

var getClientByEmail = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(request, response) {
    var email, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            //Get Method to get client by Email
            email = request.params.email;
            _context4.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context4.sent;
            _context4.next = 6;
            return pool.request().input('Email', email).query(_database.queries.getClientByEmail);

          case 6:
            result = _context4.sent;
            response.send(result.recordset[0]);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getClientByEmail(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getClientByEmail = getClientByEmail;

var deleteClientById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(request, response) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            //Delete Method to delete client by Id
            id = request.params.id;
            _context5.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context5.sent;
            _context5.next = 6;
            return pool.request().input('Id', id).query(_database.queries.deleteClientById);

          case 6:
            result = _context5.sent;
            response.send(result);

          case 8:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteClientById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteClientById = deleteClientById;

var deleteClientByEmail = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(request, response) {
    var email, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            //Delete Method to delete client by Email
            email = request.params.email;
            _context6.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context6.sent;
            _context6.next = 6;
            return pool.request().input('Email', email).query(_database.queries.deleteClientByEmail);

          case 6:
            result = _context6.sent;
            response.send(result);

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteClientByEmail(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteClientByEmail = deleteClientByEmail;

var updateClientById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(request, response) {
    var _request$body2, name, lastName, email, address, postalCode, id, pool;

    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _request$body2 = request.body, name = _request$body2.name, lastName = _request$body2.lastName, email = _request$body2.email, address = _request$body2.address, postalCode = _request$body2.postalCode;
            id = request.params.id;

            if (!(name == null || lastName == null || email == null || address == null || postalCode == null)) {
              _context7.next = 4;
              break;
            }

            return _context7.abrupt("return", response.status(400).json({
              msg: 'Bad Request. Please fill out fields.'
            }));

          case 4:
            _context7.next = 6;
            return (0, _database.getConnection)();

          case 6:
            pool = _context7.sent;
            _context7.next = 9;
            return pool.request().input('name', _database.sql.VarChar, name).input('lastName', _database.sql.VarChar, lastName).input('email', _database.sql.VarChar, email).input('address', _database.sql.VarChar, address).input('postalCode', _database.sql.VarChar, postalCode).input('Id', id).query(_database.queries.updateClientById);

          case 9:
            response.json({
              name: name,
              lastName: lastName,
              email: email,
              address: address,
              postalCode: postalCode
            });

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function updateClientById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateClientById = updateClientById;