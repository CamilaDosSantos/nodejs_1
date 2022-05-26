const ProdutoEletronico  = require('./ProdutoEletronico.js');

class Stm32 extends ProdutoEletronico {
    constructor(nome, processador, memoria, bits, QUantidade_de_pinos, botoes, led){
        super(nome, processador, memoria, bits, QUantidade_de_pinos, botoes, led);
    }
    emitirLigaLed() {
        console.log("led piscando...");
    }
}
const stm32 = new Stm32(2, 132, 3, "SPI");
console.log(`Quantidade de nome: ${stm32.getNome()}`);
console.log(`Quantidade de processador: ${stm32.getProcessador()}`);
console.log(`Quantidade de memoria: ${stm32.getBits()}`);
console.log(`Quantidade de botões: ${stm32.getBotoes()}`);
console.log(`Quantidade de pinos: ${stm32.getPinos()}`);
console.log(`Quantidade de led: ${stm32.getLed()}`);
stm32.emitirLigaLed();
