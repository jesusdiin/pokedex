const cardsDiv = document.getElementById('cardsDiv')

const getPokemon = async () => {
	let url = "https://pokeapi.co/api/v2/pokemon/";
	let elemento = document.getElementById('cardsDiv');

	const data = await fetch(url);
	let pokes = await data.json();

	// console.log(pokes)

	for (let index = 0; index < pokes.results.length; index++) {
		const pokemon = pokes.results[index];
		console.log(pokemon)
		var cardComponent = `
		<div class='col mb-4'>
			<div class='card'>
				<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png" alt="">
				<div class="card-body">
				<h5 class='card-title'>${pokemon.name}</h5>
				</div>
			</div>
		</div>
		`

		elemento.innerHTML += cardComponent;
		
	}


}

getPokemon();

console.log('hi')
