// Main.ts
import { Macros } from './macros';
import { TMB } from './Tmb';
import { Usuario } from './Usuario';
import promptSync from 'prompt-sync';

const prompt = promptSync(); // Criar o objeto prompt

export class Main {
    static iniciar(): void {
        const idade = Number(prompt("Digite aqui a sua idade: "));
        const altura = Number(prompt("Digite aqui a sua altura em cm: "));
        const peso = Number(prompt("Digite aqui o seu peso: "));
        const sexo = prompt("Você é homem ou mulher? ").toLowerCase();

        const usuario = new Usuario(idade, altura, peso, sexo);
        const tmb = new TMB(usuario);

        console.log(`Sua TMB é de: ${tmb.tmb.toFixed(2)} Calorias/dia`);

        const atividade = prompt("Sua atividade física é ativa, regular ou nula? ").toLowerCase();
        const tmbAtiva = tmb.calcularTMBAtiva(atividade);
        console.log(`Sua TMB ajustada para sua atividade física é: ${tmbAtiva.toFixed(2)} Calorias/dia`);

        const dieta = Number(prompt("Insira a TMB ajustada para calcular seus macros: "));
        const macros = new Macros(usuario);
        macros.calcularMacros(dieta);
    }
}
