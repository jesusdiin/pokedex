const cardsDiv = document.getElementById('cardsDiv')







const getPokemon = async () => {
	let url = "https://pokeapi.co/api/v2/pokemon/";
	let group1 = document.getElementById('group1');
	let group2 = document.getElementById('group2')

	const data = await fetch(url);
	let pokes = await data.json();

	// console.log(pokes)

	class Pokemon {
		constructor(name, url) {
			this.name = name;
			this.url = url;
		}
		obtener
	}

	for (let index = 0; index < pokes.results.length; index++) {
		const pokemon = pokes.results[index];
		console.log(pokemon)
		var cardComponent = `
		<div class='col-sm-2 col-md-3 col-lg-3 row' id='cardId'>
			<div class='card' id="">
				<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg" alt="" class="avatarImg">
				<div class="card-body">
				<h5 class='card-title'>${pokemon.name}</h5>
				</div>
			</div>
		</div>
		`
		group1.innerHTML += cardComponent;
		group2.innerHTML += cardComponent;
	}

	// for (let index = 0; index < pokes.results.length; index++) {
	// 	const pokemon = pokes.results[index];
	// 	console.log(pokemon)
	// 	var cardComponent = `
	// 	<div class='col-sm-2 col-md-3 col-lg-3 row' id='cardId'>
	// 		<div class='card' id="">
	// 			<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index}.svg" alt="" class="avatarImg">
	// 			<div class="card-body">
	// 			<h5 class='card-title'>${pokemon.name}</h5>
	// 			</div>
	// 		</div>
	// 	</div>
	// 	`
	// 	group2.innerHTML += cardComponent;
	// }


}

getPokemon();

console.log('hi')
