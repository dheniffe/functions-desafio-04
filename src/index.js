//1 - crie uma função que exiba uma mensagem no console
function message() {
  console.log("oi");
}

message();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function identification(name) {
  console.log(`Oi, meu nome é ${name}`);
}

identification("Dheniffe");
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function information(name, age, music) {
  console.log(`Oi, meu nome é ${name}, tenho ${age} anos e adoro ${music}`);
}

information("Dheniffe", "22", "rap");
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function media(movie, music) {
  console.log(`Dicas do dia: Filme - ${movie}. Música - ${music}.`);
}

media("Hoje eu quero voltar sozinho", "Frank Ocean - Chanel");

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function tripleMultiply(x) {
  return x * 3;
}

const triple = tripleMultiply(5);
console.log(triple);
