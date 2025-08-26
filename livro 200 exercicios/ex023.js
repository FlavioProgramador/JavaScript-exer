//Exercício 23: Escreva um programa que verifica as cores de um semafáro.

function verificaSemaforo(cor) {
    if(cor === "Verde") {
        console.log("Siga em frente!")
    } else if (cor === "Vermelho") {
        console.log("Pare!!!")
    } else if (cor === "Amarelo") {
        console.log("Atenção!!!")
    } else {
        console.log("Cor nao existe no semaforo!")
    }
    
}

verificaSemaforo("azul")
verificaSemaforo("Verde")
verificaSemaforo("Vermelho")
verificaSemaforo("amarelo")