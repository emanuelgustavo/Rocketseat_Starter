"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Desafo 01
console.log('Desafio 01');

var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email, this.senha = senha, this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin;
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin(email, senha, admin) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this, email, senha, admin));
    _set(_getPrototypeOf(Admin.prototype), "email", email, _assertThisInitialized(_this), true), _set(_getPrototypeOf(Admin.prototype), "senha", senha, _assertThisInitialized(_this), true), _set(_getPrototypeOf(Admin.prototype), "admin", true, _assertThisInitialized(_this), true);
    return _this;
  }

  return Admin;
}(Usuario);

var user = new Usuario('email@teste.com', 'senha123');
var admin = new Admin('email@teste.com', 'senha123');
console.log(user.isAdmin());
console.log(admin.isAdmin()); //DESAFIO 02

console.log('Desafio 02');
var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idades);
var escolhidos = usuarios.filter(function (usuario) {
  return usuario.empresa === 'Rocketseat' && usuario.idade > 18;
});
console.log(escolhidos);
var googler = usuarios.find(function (usuario) {
  return usuario.empresa === 'Google';
});
console.log(googler);
var newUsuarios = usuarios.map(function (usuario) {
  return {
    nome: usuario.nome,
    idade: usuario.idade * 2,
    empresa: usuario.empresa
  };
});
console.log(newUsuarios);
var meiaIdade = newUsuarios.filter(function (usuario) {
  return usuario.idade <= 50;
});
console.log(meiaIdade); //DESAFIO 03

console.log('Desafio 03'); //Desafio 3.1

console.log('3.1');
var arr = [1, 2, 4, 5];
console.log(arr.map(function (item) {
  return item + 10;
}));
console.log(arr.map(function (item) {
  return item + 10;
})); //3.2

console.log('3.2'); //const usuario = { nome: 'Diego', idade: 23 };

/*function mostraIdade(usuario) {
  return usuario.idade;
}*/
//const mostraIdade = usuario => usuario.idade;
//console.log(mostraIdade(usuario));
//3.3

console.log('3.3'); //const nome = 'Diego';
//const idade = 23;

/*function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
};*/
//const mostraUsuario = ( nome='Diego', idade=18 ) => ({ nome, idade });
//console.log(mostraUsuario(nome, idade));
//3.4

/*const promise = function() {
  return new Promise(function(resolve, reject) {
    return resolve();
  });
};*/

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; //const promise = () => new Promise = ( resolve, reject ) => {resolve()};
//promise()
//  .then( () => console.log('resolve()'));
//Desafio 04


console.log('Desafio 04');
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
})); //Desafio 05
//5.1

console.log('Desafio 05');
console.log('Desafio 05.1');
var numbers = [1, 2, 3, 4, 5, 6];
var first = numbers[0],
    rest = numbers.slice(1);
console.log(first);
console.log(rest);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, item) {
    total += item;
    return total;
  });
}

;
console.log(soma(2, 3, 4)); //5.2

var usuario5 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};
console.log(usuario5);

var usuario52 = _objectSpread({}, usuario5, {
  nome: 'Gabriel'
});

console.log(usuario52);

var usuario53 = _objectSpread({}, usuario5, {
  endereco: {
    cidade: 'Lontras'
  }
});

console.log(usuario53); //Desafio 6

console.log('Desafio 6');
var nomeUsuario = 'Emanuel';
var idadeUsuario = 28;
console.log("O usu\xE1rio ".concat(nomeUsuario, " tem ").concat(idadeUsuario, " anos.")); //Desafio 7

console.log('Desafo 7');
var cidadeUsuario = 'São Bento do Sul';
var usuario7 = {
  nomeUsuario: nomeUsuario,
  idadeUsuario: idadeUsuario,
  cidadeUsuario: cidadeUsuario
};
console.log(usuario7);
