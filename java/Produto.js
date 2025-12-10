"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto1 {
    constructor(n, p, d) {
        this.nome = n;
        this.preco = p;
        this.descricao = d;
    }
}
let tomada = new Produto1("Tomada", 10.9, "tomada para parede");
console.log(tomada);
