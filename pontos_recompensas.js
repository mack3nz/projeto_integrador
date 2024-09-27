// Sistema de pontos e recompensas
prompt = require('prompt-sync')()

const nome = prompt("Seja bem-vindo! Qual seu nome? ")
const frequencia = prompt(`Olá ${nome}, quantos dias você frequentou a academia esse mês? (10 pontos p/ dia) `)
const pontos = frequencia * 10

if (frequencia < 1 || frequencia > 30) {
    console.log('Esse número é inválido! Digite um número entre 1-30.')
} else {
    console.log(`Você foi à academia ${frequencia} dias esse mês. Com isso você acumulou ${pontos} pontos!`)
}

const premio = prompt('Você quer resgatar algum prêmio? ')

if (premio.toLowerCase() === 'nao') {
    console.log('Ok, até logo!')
    return

} else if (premio.toLowerCase() === 'sim') {
    console.log('Está é a lista de prêmios.')
    console.log('1. Whey 1kg: 300 Pontos')
    console.log('2. Creatina 500g: 300 Pontos')
    console.log('3. Whey 900g: 260 Pontos')
    console.log('4. Creatina 300g: 235 Pontos')
    console.log('5. Roupas: 211 Pontos')
    console.log('6. Creatina 150g: 198 Pontos')
    console.log('7. Munhequeira: 150 Pontos')
    console.log('8. Strap - 100 Pontos')
}

const escolha = parseInt(prompt('Qual prêmio você quer resgatar? (digite o número do prêmio) '))

switch (escolha) {
    case 1:
        if (pontos >= 300) {
            console.log('Parabéns! Você resgatou o prêmio Whey 1kg!')
        } else {
            console.log('Você não tem pontos suficientes para resgatar este prêmio.')
        }
        break
    case 2:
        if (pontos >= 300) {
            console.log('Parabéns! Você resgatou o prêmio Creatina 500g!')
        } else {
            console.log('Você não tem pontos suficientes para resgatar este prêmio.')
        }
        break
    case 3:
        if (pontos >= 260) {
            console.log('Parabéns! Você resgatou o prêmio Whey 900g!')
        } else {
            console.log('Você não tem pontos suficientes para resgatar este prêmio.')
        }
        break
    case 4:
        if (pontos >= 240) {
            console.log('Parabéns! Você resgatou o prêmio Creatina 300g!')
        } else {
            console.log('Você não tem pontos suficientes para resgatar este prêmio.')
        }
        break
    case 5:
        if (pontos >= 210) {
            console.log('Parabéns! Você resgatou o prêmio Roupas!')
        } else {
            console.log('Você não tem pontos suficientes para resgatar este prêmio.')
        }
        break
    case 6:
        if (pontos >= 200) {
            console.log('Parabéns! Você resgatou o prêmio Ceratina 150g!')
        } else {
            console.log('Você não tem pontos suficientes para resgatar este prêmio.')
        }
        break
    case 7:
        if (pontos >= 150) {
            console.log('Parabéns! Você resgatou o prêmio Munhequeira!')
        } else {
            console.log('Você não tem pontos suficientes para resgatar este prêmio.')
        }
        break
    case 8:
        if (pontos >= 100) {
            console.log('Parabéns! Você resgatou o prêmio Strap!')
        } else {
            console.log('Você não tem pontos suficientes para resgatar este prêmio.')
        }
        break
    default:
        console.log('Opção inválida. Tente novamente!')
}
