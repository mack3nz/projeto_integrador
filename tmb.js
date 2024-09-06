prompt = require("prompt-sync")()
const idade = Number(prompt("Digite aqui a sua idade: "))
const altura = Number(prompt("Digite aqui a sua altura em cm: "))
const peso = Number(prompt("Digite aqui o seu peso: "))
const sexo = prompt("Você é homem ou mulher? ")
const homem = (10 * peso) + (6.25 * altura) - (5 * idade) + 5
const mulher = (10 * peso) + (6.25 * altura) - (5 * idade) - 161


if (sexo == "homem") {
    console.log(`A sua TMB é de ${homem}`)
} else {
    console.log(`A sua TMB é de ${mulher}`)
}

const espaco = console.log(" ")
const atividade = prompt("Sua atividade física é ativa, regular ou nula? ")

if (atividade == "ativa" && sexo == "homem") {
    console.log(`A sua TMB é de ${homem + Number(974.56)}`)
} else if (atividade != "ativa" && atividade == "regular" && sexo == "homem") {
    console.log(`A sua TMB é de ${homem + Number(757.99)}`)
} else if (atividade != "ativa" && atividade != "regular" && atividade == "nula" && sexo == "homem") {
    console.log(`A sua TMB é de ${homem + Number(600)}`)
}

if (atividade == "ativa" && sexo == "mulher") {
    console.log(`A sua TMB é de ${mulher + Number(721.16)}`)
} else if (atividade != "ativa" && atividade == "regular" && sexo == "mulher") {
    console.log(`A sua TMB é de ${mulher + Number(540.87)}`)
} else if (atividade != "ativa" && atividade != "regular" && atividade == "nula" && sexo == "mulher") {
    console.log(`A sua TMB é de ${mulher + Number(360.58)}`)
}
