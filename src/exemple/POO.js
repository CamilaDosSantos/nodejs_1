class Animal {
    #peso;// caracteristicas
    #cor;// com # estão privadas
    contructor() {
        this.#cor = "verde";
        this.#peso = "50";

        // todo animal que for criado tera estes requesitos padrão
        // construtor (){

    }
    emitirSom() {
        console.log(`Implelass cachorro extends Animal `);
        return this.#cor;// parametro 

    }
    
}


// criar um obj
// const animal001 = new Animal("azul", 2);
// const animal002 = new Animal("amarelo", 10);

// mostrar as caracteristicas do aminal
// console.log(animal001.peso + " " + animal001.cor);
// console.log(animal002.peso + " " + animal002.cor);
// console.log(animal001.emitirSom());

// printar dados que estão privados
// console.log(animal001.getPeso() + " " + animal001.getCor());
// console.log(animal002.getPeso() + " " + animal002.getCor());

// mudar caracteristica, privado
// animal001.setPeso(3000);
// console.log(animal002.getPeso());

// mudar caracteristica, não privado
// animal001.peso = 842723;

// console.log("Iniciando APP");


// Cachorro.js

class cachorro extends Animal {
    contrutor(cor, peso) {
        super(cor, peso)
    }
    emitirSom() {
        // return "AuAu!";
        console.log("AuAu!");
    }
}
class Gato extends Animal { // pra mim contruir uma class eu tenho que ter um contrutor 
    contrutor(cor, peso) {
        super(cor, peso)
        this.#numeroDeVidas = 7;
    }
    getNumeroDeVida() {
        return this.#numeroDeVidas;
    }

    emitirSom() {
        console.log("Meow!");
    }
}
const cachorro001 = new Cachorro("rosa", 56);
console.log(`A cor do cachorro é ${cachorro001.getCor()}`);

const gato001 = new Cachorro("verde", 56);
console.log(`A cor do cachorro é ${gato001.getCor()} e a número de vidas é ${getNumeroDeVida()}`);

cachorro001.emitirSom();
gato001.emitirSom();

Recolher


