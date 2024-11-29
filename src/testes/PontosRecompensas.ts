import promptSync from 'prompt-sync';

export class PontosRecompensas {
    private prompt = promptSync();
    private nome: string;
    private frequencia: number;
    private pontos: number;

    constructor() {
        this.nome = this.prompt("Seja bem-vindo! Qual seu nome? ");
        this.frequencia = Number(this.prompt(`Olá ${this.nome}, quantos dias você frequentou a academia esse mês? (10 pontos por dia) `));
        this.pontos = this.calcularPontos();
    }

    private calcularPontos(): number {
        if (this.frequencia < 1 || this.frequencia > 30) {
            console.log('Esse número é inválido! Digite um número entre 1-30.');
            return 0;
        }
        return this.frequencia * 10;
    }

    public exibirPontos(): void {
        console.log(`Você foi à academia ${this.frequencia} dias esse mês. Com isso, você acumulou ${this.pontos} pontos!`);
    }

    public resgatarPremio(): void {
        const premio: string = this.prompt('Você quer resgatar algum prêmio? (sim/não) ');

        if (premio.toLowerCase() === 'não') {
            console.log('Ok, até logo!');
            return;
        } else if (premio.toLowerCase() === 'sim') {
            this.listarPremios();
            const escolha: number = Number(this.prompt('Qual prêmio você quer resgatar? (digite o número do prêmio) '));
            this.processarResgate(escolha);
        } else {
            console.log('Resposta inválida. Tente novamente.');
        }
    }

    private listarPremios(): void {
        console.log('Esta é a lista de prêmios:');
        console.log('1. Whey 1kg: 300 Pontos');
        console.log('2. Creatina 500g: 300 Pontos');
        console.log('3. Whey 900g: 260 Pontos');
        console.log('4. Creatina 300g: 235 Pontos');
        console.log('5. Roupas: 211 Pontos');
        console.log('6. Creatina 150g: 198 Pontos');
        console.log('7. Munhequeira: 150 Pontos');
        console.log('8. Strap: 100 Pontos');
    }

    private processarResgate(escolha: number): void {
        switch (escolha) {
            case 1:
                this.verificarPontos(300, 'Whey 1kg');
                break;
            case 2:
                this.verificarPontos(300, 'Creatina 500g');
                break;
            case 3:
                this.verificarPontos(260, 'Whey 900g');
                break;
            case 4:
                this.verificarPontos(235, 'Creatina 300g');
                break;
            case 5:
                this.verificarPontos(211, 'Roupas');
                break;
            case 6:
                this.verificarPontos(198, 'Creatina 150g');
                break;
            case 7:
                this.verificarPontos(150, 'Munhequeira');
                break;
            case 8:
                this.verificarPontos(100, 'Strap');
                break;
            default:
                console.log('Opção inválida. Tente novamente!');
        }
    }

    private verificarPontos(pontosNecessarios: number, premio: string): void {
        if (this.pontos >= pontosNecessarios) {
            console.log(`Parabéns! Você resgatou o prêmio ${premio}!`);
        } else {
            console.log(`Você não tem pontos suficientes para resgatar o prêmio ${premio}.`);
        }
    }
}