// Declaração de variáveis booleanas
let verdadeiro = true; // Valor booleano verdadeiro
let falso = false; // Valor booleano falso

// Expressões booleanas
let maiorQue = 10 > 5; // Expressão booleana: 10 é maior que 5
let igualA = 10 === 5; // Expressão booleana: 10 é igual a 5 (uso de triplo igual para verificar igualdade estrita)
let diferenteDe = 10 !== 5; // Expressão booleana: 10 é diferente de 5

// Operadores lógicos
let and = verdadeiro && falso; // Operador lógico AND (&&)
let or = verdadeiro || falso; // Operador lógico OR (||)
let not = !verdadeiro; // Operador lógico NOT (!)

// Conversão de outros tipos para booleanos
let numero = 0; // Número zero
let stringVazia = ""; // String vazia
let valorNulo = null; // Valor nulo
let valorIndefinido = undefined; // Valor indefinido

let booleanoNumero = Boolean(numero); // Conversão de número para booleano
let booleanoString = Boolean(stringVazia); // Conversão de string para booleano
let booleanoNulo = Boolean(valorNulo); // Conversão de valor nulo para booleano
let booleanoIndefinido = Boolean(valorIndefinido); // Conversão de valor indefinido para booleano

// Exibição de resultados
console.log("Valor booleano verdadeiro:", verdadeiro);
console.log("Valor booleano falso:", falso);
console.log("Expressão '10 > 5':", maiorQue);
console.log("Expressão '10 === 5':", igualA);
console.log("Expressão '10 !== 5':", diferenteDe);
console.log("Operador AND (verdadeiro && falso):", and);
console.log("Operador OR (verdadeiro || falso):", or);
console.log("Operador NOT (!verdadeiro):", not);
console.log("Conversão de número para booleano:", booleanoNumero);
console.log("Conversão de string para booleano:", booleanoString);
console.log("Conversão de valor nulo para booleano:", booleanoNulo);
console.log("Conversão de valor indefinido para booleano:", booleanoIndefinido);
