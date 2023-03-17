const searchBar = document.querySelector('#searchBar');
const searchButton = document.getElementById("searchButton");
const idNum = document.getElementById('number');
const img = document.getElementById('poke-img');
const pkmnName = document.getElementById('poke-name');
const type = document.querySelectorAll('.type');
let types = document.querySelector('.types');
const moves = document.querySelector('.moves')

const fetchApi = async (pkmnName) => {
    let res = await fetch('https://pokeapi.co/api/v2/pokemon/' + pkmnName);
    

    if (res.status === 200) {
        let pkmnData = await res.json();
        return pkmnData;
    }
    return false;
}

async function search(searchBar) {
    let pkmnData = await fetchApi(searchBar.value);
    
    // validation

    if (!pkmnData) {
        alert('Pokemon does not exist')
    }

    console.log(pkmnData);
    
    console.log(pkmnData.id);

    pkmnName.innerHTML = pkmnData.name;

    idNum.innerHTML = '#' + String(pkmnData.id).padStart(3, '0');

    img.src = String(pkmnData.sprites.other.home.front_default);

    types.innerHTML = '';

    pkmnData.types.forEach((type) => {
        let newType = document.createElement('span');

        newType.innerHTML = type.type.name;
        newType.classList.add('type');

        types.appendChild(newType);
    });

    moves.innerHTML = '';

    pkmnData.abilities.forEach((ability) => {
        let newMove = document.createElement('span');

        newMove.innerHTML = ability.ability.name;
        newMove.classList.add('move');

        moves.appendChild(newMove)
    })
};

