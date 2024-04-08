// Operadores de Comparação em JavaScript

// Igualdade (==)
console.log(5 == 5); // true
console.log(5 == '5'); // true, os valores são iguais apesar do tipo diferente
console.log(5 == 10); // false

// Desigualdade (!=)
console.log(5 != 10); // true
console.log('hello' != 'world'); // true, as strings são diferentes
console.log(5 != '5'); // false, os valores são iguais apesar do tipo diferente

// Estritamente Igual (===)
console.log(5 === 5); // true
console.log(5 === '5'); // false, os tipos são diferentes
console.log('hello' === 'world'); // false, as strings são diferentes

// Estritamente Desigual (!==)
console.log(5 !== '5'); // true, os tipos são diferentes
console.log(5 !== 10); // true
console.log(5 !== 5); // false

// Maior que (>)
console.log(10 > 5); // true
console.log(5 > 10); // false

// Maior ou Igual (>=)
console.log(10 >= 5); // true
console.log(5 >= 5); // true
console.log(5 >= 10); // false

// Menor que (<)
console.log(5 < 10); // true
console.log(10 < 5); // false

// Menor ou Igual (<=)
console.log(5 <= 10); // true
console.log(5 <= 5); // true
console.log(10 <= 5); // false
