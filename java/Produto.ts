export default interface Produto{
 nome :string;
 preco: number;
 descricao: string;
}
  class Produto1 implements Produto{
    nome : string;
    preco: number; 
    descricao: string;
   

    constructor (n: string, p: number, d:string){
        this.nome = n;
        this.preco =  p;
        this.descricao = d;
    }
  }

let tomada = new Produto1("Tomada",10.9,"tomada para parede")
console.log(tomada);
  

