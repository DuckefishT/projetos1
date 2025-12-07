import Funcionario from "./Funcionario";

class Gerente extends Funcionario{
  constructor(nome:string, sexo: string){
    super(nome);
    this.sexo = sexo;
    this.idade = 19;
    this.cargo = "estagiario";
    this.endereco = "nordeste";
    this.numerotel = 99898989;
  } 
}

let sansa = new Funcionario("Tiago")
console.log(sansa);

