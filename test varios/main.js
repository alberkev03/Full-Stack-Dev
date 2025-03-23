function firstGenPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Request failed!');
        })
        .then(data => {
            console.log(data.results);
            data.results.forEach(pokemon => {
                console.log('${pokemon.name}: ${pokemon.url}');
            } ) } ) }