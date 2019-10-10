import { Rodado } from './rodado';

export class TempoCarro implements Rodado{
 
    public write() : void{
        console.log("Já tem 5 anos! Função Write");
    }
    public read() : void{
        console.log("Já tem 5 anos! Função Read");
    }
    public delete() : void{
        console.log("Já tem 5 anos! Função Delete");
    }
}