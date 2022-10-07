"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUpUser = exports.getUsers = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

//ADMIN USERS
var getUsers = /*#__PURE__*/function () {
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
            return pool.request().query(_database.queries.getAllUsers);

          case 6:
            result = _context.sent;
            response.json(result.recordset);
            _context.next = 15;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            response.status(500);
            response.send(_context.t0.message);
            console.log(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var signUpUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(request, response) {
    var bcrypt, _request$body, name, email, password, hashedPassword, pool;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            bcrypt = require('bcrypt');
            _request$body = request.body, name = _request$body.name, email = _request$body.email, password = _request$body.password;
            _context2.next = 4;
            return bcrypt.hash(password, 10);

          case 4:
            hashedPassword = _context2.sent;
            _context2.next = 7;
            return (0, _database.getConnection)();

          case 7:
            pool = _context2.sent;

            if (!(name == null || email == null || password == null)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", response.status(400).json({
              msg: 'Bad Request. Please fill out fields.'
            }));

          case 10:
            _context2.prev = 10;
            _context2.next = 13;
            return pool.request().input("name", _database.sql.VarChar, name).input("email", _database.sql.VarChar, email).input("password", _database.sql.VarChar, hashedPassword).query(_database.queries.signUpUser);

          case 13:
            _context2.next = 19;
            break;

          case 15:
            _context2.prev = 15;
            _context2.t0 = _context2["catch"](10);
            console.log(_context2.t0);
            response.status(500).send("Bad Request");

          case 19:
            response.json({
              name: name,
              email: email,
              hashedPassword: hashedPassword
            });

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[10, 15]]);
  }));

  return function signUpUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signUpUser = signUpUser;