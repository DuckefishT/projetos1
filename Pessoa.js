"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome, idade, sexo, endereco, numerotel) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.endereco = endereco;
        this.numerotel = numerotel;
    }
    showpessoa() {
        return ("\nNome: " + this.nome + ", " + "\nIdade:" + this.idade + "" + "\nSexo: " + this.sexo + " " + "\nEndereço: " + this.endereco + " " + "\nNumero: " + this.numerotel);
    }
}
exports.default = Pessoa;
