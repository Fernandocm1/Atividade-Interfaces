import { Direcao } from './direcao';

export class DirecaoEletrica implements Direcao{
 
    public write() : void{
        console.log("Direção Elétrica! Função Write");
    }
    public read() : void{
        console.log("Direção Elétrica! Função read");
    }
    public delete() : void{
        console.log("Direção Elétrica! Função Delete");
    }
}