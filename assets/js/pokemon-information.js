

function htmlInformation(pokemonInformation) {

    const model = {
        photo: pokemonInformation.sprites.other.dream_world.front_default,
        name: pokemonInformation.name,
        abilities: pokemonInformation.abilities.map(abilities => abilities.ability.name),
        types: pokemonInformation.types.map(types => types.type.name)
    }
    return `
        <img src="${model.photo}" alt="">
        <p class="pokemon-name">${pokemonInformation.name}</p>

        <div class="box">
            <h3>Abilities</h3>
            <ol class="pokemon-abilities">
                ${model.abilities.map(item => `<li class="pokemon-ability">${item}</li>\n` ).join('')}

            </ol>
        </div>

        <div class="box">
            <h3>Types</h3>
            <ol class="pokemon-types">
            ${model.types.map(item => `<li class="grass">${item}</li>` ).join('')}
            </ol>
        </div>
        <button onclick="closePainel()">Close</button>
    `
}


function closePainel() {
    const painel = document.querySelector('#side')
    painel.classList.toggle('open')
}

function fetchPokemonInformation(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(res => {
        const painel = document.querySelector('#side')

        painel.classList.add('open')
        console.log(painel.classList)

        painel.innerHTML = htmlInformation(res)
    
    })
}




function getPokemonInformation(e){
    
    const number = e.querySelector('.number').innerHTML
    const id = number.slice(1)
    fetchPokemonInformation(id)



}