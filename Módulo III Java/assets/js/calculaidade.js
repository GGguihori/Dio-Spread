function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Maria',
	idade: 30,
};

const pessoa2 = {
	nome: 'Carla',
	idade: 26,
};

const pessoa3 = {
	nome: 'Fiona',
	idade: 5,
}

const animal = {
	nome: 'Tim',
	idade: 4,
	raca: 'Spitz',

}


    ;

console.log(calculaIdade.call(animal,5));
console.log(calculaIdade.apply(animal,[10]));




