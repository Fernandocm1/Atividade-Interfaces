import { Motor } from './motor';

export class Vwtsi implements Motor{
 
    public write() : void{
        console.log("Motor 1.0 turbo flex, com injeção direta e três cilindos, fabricado pela VW! Função Write");
    }
    public read() : void{
        console.log("Motor 1.0 turbo flex, com injeção direta e três cilindos, fabricado pela VW! Função read");
    }
    public delete() : void{
        console.log("Motor 1.0 turbo flex, com injeção direta e três cilindos, fabricado pela VW! Função Delete");
    }
}