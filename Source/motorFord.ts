import { Motor } from './motor';

export class MotorFord implements Motor{
 
    public write() : void{
        console.log("Motor da Ford! Função Write");
    }
    public read() : void{
        console.log("Motor da Ford! Função read");
    }
    public delete() : void{
        console.log("Motor da Ford! Função Delete");
    }
}