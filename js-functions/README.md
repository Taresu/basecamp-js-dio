# Funções

Miniprojetos referentes ao curso "Funções", da [Digital Innovation One](https://digitalinnovation.one/).

## Atividade 1: students Approved

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