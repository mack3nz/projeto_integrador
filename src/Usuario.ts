export class Usuario {
    idade: number;
    altura: number;
    peso: number;
    sexo: string;

    constructor(idade: number, altura: number, peso: number, sexo: string) {
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.sexo = sexo;
    }
}