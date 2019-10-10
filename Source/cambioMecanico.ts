import { Cambio } from './cambio';

export class CambioMecanico implements Cambio{
 
    public write() : void{
        console.log("Cambio Mecânico! Função Write");
    }
    public read() : void{
        console.log("Cambio Mecânico! Função read");
    }
    public delete() : void{
        console.log("Cambio Mecânico! Função Delete");
    }
}