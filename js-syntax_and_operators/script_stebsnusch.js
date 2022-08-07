function compareNumbers(num1, num2) {
    if (!num1 || !num2) console.log("Defina dois números!");


    const FIRST_STRING = createFirstString(num1, num2);
    const LAST_STRING = createLastString(num1, num2);

    return `${FIRST_STRING} ${LAST_STRING}`;
}

function createFirstString(num1, num2) {
    let isEqual = '';

    if (num1 !== num2) { isEqual = "não" };

    return `Os numeros ${num1} e ${num2} ${isEqual} são iguais.`
}

function createLastString(num1, num2) {
    const SUM = num1 + num2;
    const SUM_EQUAL_10 = SUM === 10;
    const SUM_EQUAL_20 = SUM === 20;
    const COMPARE_10 = SUM > 10;
    const COMPARE_20 = SUM > 20;

    let result10 = 'menor';
    let result20 = 'menor';

    if (SUM_EQUAL_10 || SUM_EQUAL_20) { return `Sua soma é ${SUM}, que não é menor/maior que 10 e nem menor/maior que 20.\n` };

    if (COMPARE_10) { result10 = 'maior'; }
    if (COMPARE_20) { result20 = 'maior'; }

    return `Sua soma é ${SUM}, que é ${result10} que 10 e ${result20} que 20.\n`;
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