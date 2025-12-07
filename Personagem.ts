//nome, energia, vida, atque, defesa
import prompt  from "prompt-sync";

//classe 
    class Personagem{
      constructor(
      public nome: string,
      public energia: number,
      public vida: number ,
      public ataque: number ,
      public defesa: number 
      ){}
  }

let teclado = prompt();
let sansa : Personagem;
sansa = new Personagem("Tiago",10,20,5,10);
let option: number = 0
while (option != 9) {
  console.log("Personagem")
  console.log("1.Treinar ataque")
  console.log("2. Treinar defesa")
  console.log("9. sair")
  option = +teclado("Escolha")

  switch (option) {
    case 1:
      sansa.ataque += 10;
      break;
    case 2:
      sansa.defesa += 10;
    break;
    case 3:
     console.log(sansa)
    default:
      break;
  }

}
