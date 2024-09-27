// criando uma pilha vazia 

let pilha_prato = [];

// adicionando elemento 

pilha_prato.push("Prato Laranja");
pilha_prato.push("Prato Verde");
pilha_prato.push("Prato Azul");
pilha_prato.push("Prato Vermelho");

//tamanho da pilha 

let tam = pilha_prato.length;
console.log("O tamanho da pilha é: " + tam);

//verificando se a pilha esta vazia

let vazia = pilha_prato.length == 0;

console.log("A pilha esta vazia: " + vazia);

//acessando o topo da pilha 
let topo = pilha_prato[pilha_prato.length-1]
console.log("o elemento que esta no topo é: " + topo);

//removendo o elemento da pilha 
let rem = pilha_prato.pop();
console.log("o elemento removido é: " + rem);

//percorrendo uma pilha
for (let i = pilha_prato.length-1; i >= 0; i--) {
    console.log(pilha_prato[i]);
}   
