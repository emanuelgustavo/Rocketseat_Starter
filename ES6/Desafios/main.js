//Desafo 01
console.log('Desafio 01');
class Usuario {
  constructor(email, senha) {
    this.email = email,
    this.senha = senha, 
    this.admin = false
  }
  isAdmin() {
    return this.admin;
  };
}

class Admin extends Usuario{
  constructor (email, senha, admin){
    super(email, senha, admin);
    super.email = email,
    super.senha = senha,
    super.admin = true
  }
}

const user = new Usuario('email@teste.com', 'senha123');
const admin = new Admin('email@teste.com', 'senha123');

console.log(user.isAdmin());
console.log(admin.isAdmin());

//DESAFIO 02
console.log('Desafio 02');

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook'}
]

const idades = usuarios.map( usuario => usuario.idade );

console.log(idades);

const escolhidos = usuarios.filter( usuario => usuario.empresa === 'Rocketseat' && usuario.idade > 18);

console.log(escolhidos);

const googler = usuarios.find( usuario => usuario.empresa === 'Google');

console.log(googler);

const newUsuarios = usuarios.map( usuario => {
  return { nome: usuario.nome, idade: usuario.idade*2, empresa: usuario.empresa }
})

console.log(newUsuarios);

const meiaIdade = newUsuarios.filter( usuario => usuario.idade <= 50);

console.log(meiaIdade);

//DESAFIO 03
console.log('Desafio 03');

//Desafio 3.1
console.log('3.1');

const arr = [1, 2, 4, 5];

console.log(arr.map(function(item) {
  return item + 10;
}));

console.log(arr.map( item => item +10));

//3.2
console.log('3.2');

//const usuario = { nome: 'Diego', idade: 23 };

/*function mostraIdade(usuario) {
  return usuario.idade;
}*/

//const mostraIdade = usuario => usuario.idade;

//console.log(mostraIdade(usuario));

//3.3
console.log('3.3');

//const nome = 'Diego';
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

const promise = () => new Promise( (resolve, reject) => {
    return resolve();
});

//const promise = () => new Promise = ( resolve, reject ) => {resolve()};


//promise()
//  .then( () => console.log('resolve()'));

//Desafio 04
console.log('Desafio 04');

const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};

let { nome, endereco: { cidade, estado } } = empresa;

console.log(nome);
console.log(cidade);
console.log(estado);

function mostraInfo( {nome, idade } ) {
  return `${nome} tem ${idade} anos.`;
}

console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//Desafio 05
//5.1
console.log('Desafio 05');
console.log('Desafio 05.1');


const numbers = [1, 2, 3, 4, 5, 6];

let [first, ...rest] = numbers;

console.log(first);
console.log(rest);

function soma(...params){
  return params.reduce((total, item) => {
    total += item
    return total;
  })
};

console.log(soma(2,3,4));

//5.2
const usuario5 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

console.log(usuario5);

const usuario52 = {...usuario5, nome: 'Gabriel'};

console.log(usuario52);

const usuario53 = {...usuario5, endereco: { cidade:'Lontras' } }

console.log(usuario53);

//Desafio 6
console.log('Desafio 6');

const nomeUsuario = 'Emanuel';
const idadeUsuario = 28;

console.log(`O usuário ${nomeUsuario} tem ${idadeUsuario} anos.`);

//Desafio 7
console.log('Desafo 7');

const cidadeUsuario = 'São Bento do Sul';

const usuario7 = {
  nomeUsuario,
  idadeUsuario,
  cidadeUsuario,  
}

console.log(usuario7);