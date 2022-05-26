const ProdutoEletronico  = require('./ProdutoEletronico.js');

class Esp32 extends ProdutoEletronico {
    constructor(nome, processador, memoria, bits, QUantidade_de_pinos, botoes, led){
        super(nome, processador, memoria, bits, QUantidade_de_pinos, botoes, led);
    }
    emitirLigaLed() {
        console.log("led ligado...");
    }
}
const esp32 = new Esp32(2, 132, 3, "UART");
console.log(`Quantidade de nome: ${esp32.getNome()}`);
console.log(`Quantidade de processador: ${esp32.getProcessador()}`);
console.log(`Quantidade de memoria: ${esp32.getBits()}`);
console.log(`Quantidade de botões: ${esp32.getBotoes()}`);
console.log(`Quantidade de pinos: ${esp32.getPinos()}`);
console.log(`Quantidade de led: ${esp32.getLed()}`);
esp32.emitirLigaLed();
