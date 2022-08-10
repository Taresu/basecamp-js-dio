//Função para comparar os números dados, exibindo a sua soma e dizendo se são menores/maiores que 10 e/ou 20
function compareNumbers(x, y) {
    const SUM = x + y;

    if (x === y) { console.log("Os numeros", x, "e", y, "são iguais."); } else { console.log("Os numeros", x, "e", y, "são diferentes."); }

    if (SUM === 10 || SUM === 20) { console.log("Sua soma é:", SUM, ", ou seja, nem menor/maior que 10 ou 20\n") } else {
        if (SUM > 10) {
            if (SUM < 20) { console.log("Sua soma é:", SUM, ", que é maior que 10 e menor que 20 \n"); } else { console.log("Sua soma é:", SUM, ", que é maior que 10 e maior que 20\n"); }
        } else { console.log("Sua soma é:", SUM, ", que é menor que 10 e menor que 20\n"); }
    }
}

//Exemplos de combinações condicionais com números diferentes
compareNumbers(5, 10);
compareNumbers(3, 5);
compareNumbers(20, 10);
compareNumbers(17, 3);

//Exemplos de combinações condicionais com números iguais
compareNumbers(8, 8);
compareNumbers(4, 4);
compareNumbers(15, 15);
compareNumbers(10, 10);