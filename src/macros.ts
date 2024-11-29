// Macros.ts
import { TMB } from './Tmb';
import { Usuario } from './Usuario';

export class Macros {
    usuario: Usuario;
    tmb: TMB;

    constructor(usuario: Usuario) {
        this.usuario = usuario;
        this.tmb = new TMB(usuario);
    }

    // Calcula os macronutrientes com base na TMB ajustada
    public calcularMacros(dieta: number): void {
        let proteina: number, carboidrato: number, gordura: number;

        if (this.usuario.sexo === "homem") {
            if (dieta >= this.tmb.tmb + 974.56) {
                proteina = this.usuario.peso * 2.6;
                carboidrato = this.usuario.peso * 1.5;
                gordura = this.usuario.peso * 0.98;
            } else if (dieta <= this.tmb.tmb + 757.99) {
                proteina = this.usuario.peso * 1.6;
                carboidrato = this.usuario.peso * 0.75;
                gordura = this.usuario.peso * 0.57;
            } else {
                proteina = this.usuario.peso * 0.8;
                carboidrato = this.usuario.peso * 0.37;
                gordura = this.usuario.peso * 0.32;
            }
        } else {
            if (dieta >= this.tmb.tmb + 721.16) {
                proteina = this.usuario.peso * 2.6;
                carboidrato = this.usuario.peso * 1.5;
                gordura = this.usuario.peso * 0.98;
            } else if (dieta <= this.tmb.tmb + 540.87) {
                proteina = this.usuario.peso * 1.6;
                carboidrato = this.usuario.peso * 0.75;
                gordura = this.usuario.peso * 0.57;
            } else {
                proteina = this.usuario.peso * 0.8;
                carboidrato = this.usuario.peso * 0.37;
                gordura = this.usuario.peso * 0.32;
            }
        }

        console.table({
            "Proteína": `${proteina.toFixed(2)}g`,
            "Carboidratos": `${carboidrato.toFixed(2)}g`,
            "Gorduras": `${gordura.toFixed(2)}g`
        });
    }
    }
        