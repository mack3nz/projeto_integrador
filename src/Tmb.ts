// TMB.ts
import { Usuario } from './Usuario';

export class TMB {
    usuario: Usuario;
    tmb: number;

    constructor(usuario: Usuario) {
        this.usuario = usuario;
        this.tmb = this.calcularTMB();
    }

    // Calcula a TMB (Taxa de Metabolismo Basal) do usuário
    private calcularTMB(): number {
        if (this.usuario.sexo === "homem") {
            return (10 * this.usuario.peso) + (6.25 * this.usuario.altura) - (5 * this.usuario.idade) + 5;
        } else {
            return (10 * this.usuario.peso) + (6.25 * this.usuario.altura) - (5 * this.usuario.idade) - 161;
        }
    }

    // Calcula a TMB ajustada com base na atividade física
    public calcularTMBAtiva(atividade: string): number {
        let tmbAjustada = this.tmb;
        if (this.usuario.sexo === "homem") {
            if (atividade === "ativa") {
                tmbAjustada += 974.56;
            } else if (atividade === "regular") {
                tmbAjustada += 757.99;
            } else {
                tmbAjustada += 600;
            }
        } else {
            if (atividade === "ativa") {
                tmbAjustada += 721.16;
            } else if (atividade === "regular") {
                tmbAjustada += 540.87;
            } else {
                tmbAjustada += 360.58;
            }
        }
        return tmbAjustada;
    }
}
