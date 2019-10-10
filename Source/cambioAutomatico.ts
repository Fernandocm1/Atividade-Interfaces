import { Cambio } from './cambio';

export class CambioAutomatico implements Cambio{
 
    public write() : void{
        console.log("Cambio Automático! Função Write");
    }
    public read() : void{
        console.log("Cambio Automático! Função read");
    }
    public delete() : void{
        console.log("Cambio Automático! Função Delete");
    }
}