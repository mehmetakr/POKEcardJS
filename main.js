const pokecontainer = document.querySelector(".pokecontainer");
const search = document.querySelector(".search");
const searchbtn = document.querySelector(".searchbtn");
const searchinput = document.querySelector(".searchinput");

const pokemon_count = 151;

const bg_color = {
  grass: "#8BD369",
  fire: "#FF603F",
  water: "#3399FF",
  bug: "#AABB22",
  normal: "#AAAA99",
  flying: "#9AA8FA",
  poison: "#B76EA4",
  electric: "#FFD34E",
  ground: "#E2C56A",
  fairy: "#F1A8EC",
  psychic: "#FF6EA4",
  fighting: "#C56E5C",
  rock: "#C5B679",
  dragon: "#7766EE",
  ice: "#66CCFF",
};

searchbtn.addEventListener("click", () => {
  // Toggle sayesinde bir işlemi tersi ile değiştirme işlemi yaparız.
  search.classList.toggle("active");
});



searchinput.addEventListener("input", (e) =>{

  const searchvalue = searchinput.value.toLowerCase()
const pokenames =document.querySelectorAll(".pokename")

pokenames.forEach((pokemonname)=>{
  
if (pokemonname.innerHTML.toLowerCase().includes(searchvalue)) {

  pokemonname.parentElement.parentElement.style.display="block"

}
else{

  pokemonname.parentElement.parentElement.style.display="none"


}


})
})


const fetchpokemons = async () => {
  for (let i = 1; i < pokemon_count; i++) {
    await getpokemon(i);
  }
};


    

const getpokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  createpokemoncard(data);
};

const createpokemoncard = (pokemon) => {
  const pokemondivi = document.createElement("div");

  pokemondivi.classList.add("pokemon");

const pokemonid=pokemon.id.toString().padStart(3,'0')


const pokemontype =pokemon.types[0].type.name
const pokemonbg = bg_color[pokemontype]
pokemondivi.style.backgroundColor=`${pokemonbg}`

  const pokemondivinnerhtml = `     <div class="imagecontainer">
<img
src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
alt="Pokemon 1 image"
/>
</div>

<div class="pokeinfo">
<span class="pokeid">${pokemonid}</span>
<h3 class="pokename">${pokemon.name}<h3>
        <div class="small">
            <small class="pokeexper"><i class="fa-solid fa-flask">${pokemon.base_experience} exp</i>
            </small>
            <small class="pokerweight"><i class="fa-solid fa-flask">${pokemon.weight} kg</i>
            </small>

        </div>
<div class="poketype">
<i class="fa-brands fa-unchaarted"></i>

<i class="fa-brands fa-unchaarted"></i><span>${pokemontype}</span>
</div>
    </div>`;

  pokemondivi.innerHTML = pokemondivinnerhtml;

  pokecontainer.appendChild(pokemondivi);
};
fetchpokemons();
