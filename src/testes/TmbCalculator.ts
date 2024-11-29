import promptSync from 'prompt-sync';

export class TmbCalculator {
    private prompt = promptSync();
    private idade: number;
    private altura: number;
    private peso: number;
    private sexo: string;

    constructor() {
        this.idade = Number(this.prompt("Digite aqui a sua idade: "));
        this.altura = Number(this.prompt("Digite aqui a sua altura em cm: "));
        this.peso = Number(this.prompt("Digite aqui o seu peso: "));
        this.sexo = this.prompt("Você é homem ou mulher? ").toLowerCase();
    }

    public calcularTmb(): number {
        const homem = (10 * this.peso) + (6.25 * this.altura) - (5 * this.idade) + 5;
        const mulher = (10 * this.peso) + (6.25 * this.altura) - (5 * this.idade) - 161;

        if (this.sexo === "homem") {
            return homem;
        } else {
            return mulher;
        }
    }

    public calcularMacros(dieta: number): void {
        const tmb = this.calcularTmb();
        let macros: { proteina: number; carboidratos: number; gorduras: number };
    
        // Cálculo dos macros para homens
        if (this.sexo === "homem") {
            if (dieta >= (tmb + 974.56)) {
                macros = { proteina: this.peso * 2.6, carboidratos: this.peso * 1.5, gorduras: this.peso * 0.98 };
            } else if (dieta <= (tmb + 757.99) && dieta !== (tmb + 974.56) && dieta !== (tmb + 600)) {
                macros = { proteina: this.peso * 1.6, carboidratos: this.peso * 0.75, gorduras: this.peso * 0.57 };
            } else {
                macros = { proteina: this.peso * 0.8, carboidratos: this.peso * 0.37, gorduras: this.peso * 0.32 };
            }
        } 
        // Cálculo dos macros para mulheres
        else {
            if (dieta >= (tmb + 721.16)) {
                macros = { proteina: this.peso * 2.6, carboidratos: this.peso * 1.5, gorduras: this.peso * 0.98 };
            } else if (dieta <= (tmb + 540.87) && dieta !== (tmb + 721.16) && dieta !== (tmb + 360.58)) {
                macros = { proteina: this.peso * 1.6, carboidratos: this.peso * 0.75, gorduras: this.peso * 0.57 };
            } else {
                macros = { proteina: this.peso * 0.8, carboidratos: this.peso * 0.37, gorduras: this.peso * 0.32 };
            }
        }
    
        // Exibindo os macronutrientes em formato de tabela
        console.table([
            { Macronutriente: 'Proteína', Quantidade: `${macros.proteina.toFixed(2)}g` },
            { Macronutriente: 'Carboidratos', Quantidade: `${macros.carboidratos.toFixed(2)}g` },
            { Macronutriente: 'Gorduras', Quantidade: `${macros.gorduras.toFixed(2)}g` }
        ]);
    }
}