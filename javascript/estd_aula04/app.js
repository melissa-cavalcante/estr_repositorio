// console.log("Kauan")

// let nome = "melissa e kauan";
// let idade = 19;
// let altura = 1.86;
// let vazio;

// let objeto = {
//     "nome":"kauan",
//     "idade":19,
//     "altura":1.86
// }

// let objeto2 = {
//     nome,
//     idade,
//     altura
// }

// console.log(nome, idade, altura, null, true, false, vazio);
// console.log(objeto);
// console.log(objeto2);

//usando colchetes
let modelos = ["Gol", "Corsa", "Fusca"];
// usando construtor
let marcas = Array ["Chevrolet", "Gol", "Corsa"];
// valor fixo
let acessorios = new Array(5);
// vetor vazio
let cores = [];

let categoria = new Array();

// console.log(modelos);
// console.log(marcas);
// console.log(acessorios);
// console.log(modelos[2]);

let nome_modelo = modelos[0];
console.log(nome_modelo)

// adicionando elemento no fim do array

modelos.push("HB20");
console.log(modelos);

// adicionando elemento no começo

modelos.unshift("Hilux");

// remove um elemento do array

modelos.pop();
console.log(modelos);

// remove um elemento do inicio do array

modelos.shift()
console.log(modelos);

let frutas = ["laranjas", "melancias", "morango"];

let vegetais = ["batata doce", "cenoura", "milho"];

let feira = frutas.concat(vegetais);

console.log(feira);

let frutas_sel = frutas.slice(1, 3);

console.log(frutas_sel);

// alterando ou removendo

frutas.splice(1, 2, "morango", "morango");
console.log(frutas);


//função join agrupa os arrays em texto e separa pelo oq vc colcar como parametro
let frutas2 = ["laranja", "melancia", "morango", "uva", "caju"];

console.log(frutas2);

let texto = frutas2.join(", ");

console.log(texto)

//função map é criado uma nova array com os resultados passado em uma função a cada elemento
//ou seja, ele vai mapear todo vetor  e criar um novo com os resultados


let numeros = [1, 2, 3, 4, 5, 6];
let dobra = numeros.map(x => x * 2);

console.log(dobra);

//exemplo de função 
function teste(t){
    console.log(t);
}

//teste("Melissa e Kauan");

//a função filter esta percorrendo o array e fazendo uma validação logica, dps dessa validação
//ele vai criar um novo array com os elementos que passaram na validação

let numeros3 = [1, 2, 3, 4, 5, 6];
let pares = numeros3.filter(x => x % 2 === 0);

console.log(pares);

// ternario

let nota = 10;
let res = nota >= 6 ? "Aprovado" : "Reprovado";

console.log(res)

//é retornado o valor do primeiro elemento que satisfaz a função fornecida

let numeros4 = [1, 2, 3, 4, 5, 6];
let localizada = numeros4.find(x => x > 2);
let localizada2 = numeros4.findIndex(x => x > 2);

console.log("o elemento foi localizado " +localizada);
console.log("o index foi localizado " + localizada2); 

//a função some verifica se pelo menos um elemento do array passa no teste implementado
// pela função fornecida 

let numeros5 = [1, 2, 3, 4, 5, 6];
let maior = numeros5.some(x => x < 0);

console.log(maior);

// every é verificado se todos os elementos do array passam no teste implementado pela função
// fornecida

let maior2 = numeros.every(x => x > 0);

console.log(maior2)


// função sort é ordenado os elementos  do array em ordem crescente ou decrescente
let numeros_aleatorios = [10, 12, 13, 6, 4, 5, 7, 9];
console.log(numeros_aleatorios);

numeros_aleatorios.sort()
console.log(numeros_aleatorios)

