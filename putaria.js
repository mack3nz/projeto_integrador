// // contar ate 10

// let cont = 0
// for (let i = 1; i <= 10; i = i + 1) {
//     cont++
//     console.log(cont)
// }



// // numero 30 - multiplos de 4

// let i = 1

// while (i <= 30) {
//     if (i % 4 === 0) {
//         i++
//         continue
//     }
//     console.log(i)
//     i++
// } 


// somar impares ate 50

// var soma = 0
// let i = 1
// while (i <= 50) {
//     if (i % 2 != 0) {
//         console.log(i)
//         soma = soma + i;
//     }

//     i++;
//     // i = i + 1
// }

// console.log (soma)




// fibonacci

let a = 0;
let b = 1;
let termo = 1;

console.log(`Termo ${termo}: ${a}`);

while (termo < 10) {
  let proxtermo = a + b;
  a = b;
  b = proxtermo;
  termo++;

  console.log(`Termo ${termo}: ${b}`);
}