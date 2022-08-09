function verifyPalindrome1(string) {
    if (!string) return "String inexistente!";

    return string.split("").reverse().join("") === string;
}

function verifyPalindrome2(string) {
    if (!string) return "String inexistente!";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[(string.length - 1 - i)]) { return false; }
    }
    return true;
}

let palavra = "ovo";
console.log(`Para a palavra "${palavra}":`);
console.log("Função do tipo 1 retorna: " + verifyPalindrome1(palavra));
console.log("Função do tipo 2 retorna: " + verifyPalindrome2(palavra) + "\n");

palavra = "gato";
console.log(`Para a palavra "${palavra}":`);
console.log("Função do tipo 1 retorna: " + verifyPalindrome1(palavra));
console.log("Função do tipo 2 retorna: " + verifyPalindrome2(palavra));