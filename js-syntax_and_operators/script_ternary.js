//Função para comparar os números dados, exibindo a sua soma e dizendo se são menores/maiores que 10 e/ou 20
function compare_numbers(x, y) {
    let sum = x + y;

    (x === y) ? (console.log(x, "e", y, "são iguais.")) : (console.log(x, "e", y, "são diferentes."));
    (sum > 10 && sum < 20) ? (console.log("Sua soma é:", sum, ", que é maior que 10 e menor que 20 \n")) : (console.log("Sua soma é:", sum, ", que é menor que 10 ou maior ou igual a 20 \n"));
}

//Exemplos de combinações condicionais com números diferentes
compare_numbers(5, 10);
compare_numbers(3, 5);
compare_numbers(20, 10);
compare_numbers(17, 3);

//Exemplos de combinações condicionais com números iguais
compare_numbers(8, 8);
compare_numbers(4, 4);
compare_numbers(15, 15);
compare_numbers(10, 10);