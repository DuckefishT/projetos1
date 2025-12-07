export default class Funcionario{
      protected nome: string =""
      protected idade: number = 0
      protected sexo: string = ""
      protected endereco: string = ""
      protected numerotel: number = 0
      protected cargo : string = ""

    constructor(nome:string){
         this.nome = nome,
         this.idade = this.idade,
         this.sexo = this.sexo,
         this.endereco = this.endereco,
         this.numerotel = this.numerotel
         this.cargo = this.cargo
    }
    showpessoa():string{
        return ( "\nNome: "+this.nome + ", " + "\nIdade:"+ this.idade + "" + "\nSexo: "+this.sexo + " "+ "\nEndereço: "+ this.endereco +" "+ "\nNumero: "+this.numerotel +" "+ "/nCargo: "+this.cargo);
    }
}