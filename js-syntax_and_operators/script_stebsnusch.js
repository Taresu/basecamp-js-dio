function compareNumbers(num1, num2) {
    if (!num1 || !num2) console.log("Defina dois números!");


    const firstString = createFirstString(num1, num2);
    const lastString = createLastString(num1, num2);

    return `${firstString} ${lastString}`;
}

function createFirstString(num1, num2) {
    let isEqual = '';

    if (num1 !== num2) { isEqual = "não" };

    return `Os numeros ${num1} e ${num2} ${isEqual} são iguais.`
}

function createLastString(num1, num2) {
    const sum = num1 + num2;
    const sumEqual10 = sum === 10;
    const sumEqual20 = sum === 20;
    const compare10 = sum > 10;
    const compare20 = sum > 20;

    let result10 = 'menor';
    let result20 = 'menor';

    if (sumEqual10 || sumEqual20) { return `Sua soma é ${sum}, que não é menor/maior que 10 e nem menor/maior que 20.\n` };

    if (compare10) { result10 = 'maior'; }
    if (compare20) { result20 = 'maior'; }

    return `Sua soma é ${sum}, que é ${result10} que 10 e ${result20} que 20.\n`;
}

//Exemplos de combinações condicionais com números diferentes
console.log(compareNumbers(5, 10));
console.log(compareNumbers(3, 5));
console.log(compareNumbers(20, 10));
console.log(compareNumbers(17, 3));

//Exemplos de combinações condicionais com números iguais
console.log(compareNumbers(8, 8));
console.log(compareNumbers(4, 4));
console.log(compareNumbers(15, 15));
console.log(compareNumbers(10, 10));