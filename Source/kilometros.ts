import { Rodado } from './rodado';

export class Kilometros implements Rodado{
 
    public write() : void{
        console.log("Já Rodou 10 mil kilometros! Função Write");
    }
    public read() : void{
        console.log("Já Rodou 10 mil kilometros! Função Read");
    }
    public delete() : void{
        console.log("Já Rodou 10 mil kilometros! Função Delete");
    }
}