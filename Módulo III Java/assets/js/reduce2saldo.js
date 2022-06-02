const lista = [
    {
		preco: 30,
		nome: 'sabão em po',
	},
	{
		preco: 12,
		nome: 'cereal',
	},
	{
		preco: 30,
		nome: 'toalha',
	},

    

]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel,lista){
    return lista.reduce(function(prev,current, index){
        console.log('rodada' , index+1);
        console.log({prev});
        console.log({current});
        return prev-current.preco;
    }, saldoDisponivel);

}

console.log(calculaSaldo(saldoDisponivel,lista));
