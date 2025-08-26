//: Usando um laço for, imprima todos os números primos de 1 a 100.

for (let numero = 2; numero <= 100; numero++) {
    let éPrimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            éPrimo = false;
            break;
        }
    }

    if (éPrimo) {
        console.log(numero);
    }
}
