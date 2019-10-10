import { Direcao } from './direcao';

export class DirecaoHidraulica implements Direcao{
 
    public write() : void{
        console.log("Direção Histráulica! Função Write");
    }
    public read() : void{
        console.log("Direção Histráulica! Função read");
    }
    public delete() : void{
        console.log("Direção Histráulica! Função Delete");
    }
}