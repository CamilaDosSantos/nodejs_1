///tarefa savio fazer com que funcione  


class ProdutoEletronico {
    #nome;// oque todos teram 
    #processador;
    #memoria;
    #bits;
    #Quantidade_de_pinos;
    #botoes;
    #led;
    contructor() {
        this.#nome=nome;// todo obj que for criado tera estes requesitos padrão
        this.#processador = processador;
        this.#memoria= memoria;
        this.#bits= bits;
        this.#Quantidade_de_pinos= Quantidade_de_pinos;
        this.#botoes= botoes;
        this.#led=led;
    }
    emitirLigaLed() {
        console.log("LED LIGA");
    }
    getNome() {
        return this.#nome;
    }
    getProcessador() {
        return this.#processador;
    }
    getBits() {
        return this.#bits;
    }
    getPinos() {
        return this.#Quantidade_de_pinos;
    }
    getBotoes() {
        return this.#botoes;
    }
    getLed() {
        return this.#led;
    }
}
module.exports = ProdutoEletronico;


