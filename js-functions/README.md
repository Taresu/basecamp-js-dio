# Funções

Miniprojetos e anotações referentes ao curso "Funções", da [Digital Innovation One](https://digitalinnovation.one/).


##  Notas ✍️  
### Padrão Pós-ES2015 (para valores indefinidos como parâmetros de funções):
###### Exemplo 
```js
function exponencial (array, num = 1) {
const result [];

	for(let i=0; i < array.length; i++>) {
		result.push(array[i] **);
	}

	return result;
}

exponencial([1,2,3,4])
// [1, 2, 3, 4]

exponencial([1,2,3,4], 4)
// [1, 8, 27, 64]
```

### Objeto "arguments"
##### Um array com todos os parâmetros passados quando a função foi invocada
###### Exemplo
```js
function findMax ( ) {
	let max = -Infinity;

	for(let i = 0; i < arguments.length; i++) {
		if (arguments[i] > max) {
			max = arguments[i];
		}
	}
	return max;
}

findMax(13, -17, 95, 50, 23); \\ 95

```


### Tipos de funções características:

#### Função anônima - representa uma expressão sem nomeação predefinida
###### Exemplo

```js

const soma = function (a, b) {
	return a + b;
}

soma(3, 5) // 8
soma(9, 2) // 11

```
#### Função autoinvocável - expressão de função invocada imediatamente (IIFE, acrônimo em inglês)
###### Exemplo

```js

function ( ) {
	Let name = "Digital Innovation One";
	return name;
} ( );

// Digital Innovation One
```
###### Exemplo 2

```js

function (a, b) {
	return a + b;
} (4, 5);

// 9
```
###### Exemplo 3

```js

const soma3 = ( function ( ) { 
	return a + b;
	}
) (1, 7);

console.log(soma3) // 8
```
#### Callback - função passada como argumento para outra
###### Exemplo

```js

const calc = function(operacao, num1, num2) {
	return operacao(num1, num2);
}

const soma  = function(num1, num2) {
	return num1 + num 2;
}

const sub = function(num1, num2) {
	return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub); // -1
console.log(resultSoma); // 3
```

### Arrays
#### Técnica Spread - fragmentando um array em elementos independentes

###### Exemplo

```js
function sum (x, y, z) {
	return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
```

#### Técnica Rest - unindo argumentos em um array

###### Exemplo

```js
function confereTamanho(...args) {
	console.log(args.length)
}

confereTamanho () // 0 
confereTamanho (1, 2) // 2
confereTamanho (3, 4, 5) // 3
```

### Objetos 

#### Object Destructuring - filtragem de dados de um objeto

###### Exemplo

```js
const user = {
	id: 42,
	displayName = 'jdoe',
	fullName: {
		firstName: 'John',
		lastName: 'Doe'
	}
};

function userId({id}) {
	return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
	return `${first} ${last}`;
}

userId(user);
// 42

getFullName(user);
// John Doe
```
#### For...in 
##### Loop entre propriedades enumeráveis de um objeto

###### Exemplo

```js
function forInExemplo(obj) {
	for (prop in obj) {
		console.log(prop);
	}
}

const meuObjeto = {
	nome: "João",
	idade: "20";
	cidade: "Salvador";
}

forInExemplo(meuObjeto);
// nome
// idade
// cidade
```
###### Exemplo 2

```js
function forInExemplo(obj) {
	for (prop in obj) {
		console.log(prop[obj]);
	}
}

const meuObjeto = {
	nome: "João",
	idade: "20";
	cidade: "Salvador";
}

forInExemplo(meuObjeto);
// João
// 20
// Salvador
```

#### For...of
##### Loop entre estruturas iteráveis (arrays, strings)

###### Exemplo

```js
function logLetras(palavra) {
	for (letra of palavra) {
		console.log(letra);
	}
}

const palavra = "abacaxi";

logLetras(palavra)
// a
// b
// a
// c
// a
// x
// i
```

###### Exemplo 2

```js
function logLetras(nums) {
	for (num of nums) {
		console.log(num);
	}
}

const nums = [30, 20, 233, 2];

logLetras(nums)
// 30
// 20
// 233
// 2
```


## Atividade 1: Alunos Aprovados

1. Crie uma função que recebe o array `students` e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os students cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

## Atividade 2: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
```