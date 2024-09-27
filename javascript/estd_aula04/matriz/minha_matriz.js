//delcarando matriz vazia
let minha_matriz = [[], []];

let minha_matriz2 = [];

// declarando e inicializando a minha_matriz;

let minha_matriz3 = [[1,2], [3,4], [5,6]] //3x2

console.log(minha_matriz3[2][1]);

//matriz mista
let obj = {"nome": "melissa", "idade": 20};
let matrizMista = [["kauan", "25"], [20,10,30],[true, false], [null, obj]]
console.log(matrizMista)

console.log(minha_matriz3)

let matriz_diferente = [[1,2], [3,4,5,6,7,8], [5,6,7]];
console.log(matriz_diferente);

let matriz4 = [[1,2], [3,4]]

matriz4.splice(2,0, [5,6,7]);

console.log(matriz4)

//removendo uma determinada linha
matriz_diferente.splice(1,0);
console.log(matriz_diferente);

//removendo a ultima linha da matriz
matriz_diferente.pop()
console.log(matriz_diferente)

//removendo o ultimo elemento da linha da matriz
matriz4[0].pop()
console.log(matriz4)

//removendo o elemento de uma determinada linha da matriz
matriz4[1].splice(1,1)
console.log(matriz4);

//interando uma matriz

for(let l = 0; l < matriz4.length; l++){
    for(c = 0; c < matriz4[l].length; c++){
        console.log(matriz4[l][c]+"");
    }
}

let A = 5;
let B = 10;
let C = 10;

let MEDIA = ((A * 0.20) + (B * 0.30) + (C * 0.50))


console.log(MEDIA)
