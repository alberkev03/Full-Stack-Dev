const pokemonList = document.getElementById('poketable')

function getPokemonData(){
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
    fetch(url)
        .then (response => {
            if (response.ok) {
                return response.json();
            }})
        .catch(error => console.error('Error:', error))
        .then(data => {
            data.results.forEach(pokemon => {
                pokemonList.innerHTML += `<tr>
                                        <td>${pokemon.name}</td><td>${pokemon.url}</td>
                                    <tr>`
            });
        })
}

getPokemonData()