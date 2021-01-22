# pokedex-challenge 
Pokedex Challenge using React.Js

# Requirements
  - Build a Pokedex like Table that shows the first 151 Pokemon
  - Use a Real Life API to fetch pokemons list 
    - GET ( https://pokeapi.co/api/v2/pokemon?limit=100 )
  - The Pokemons should be displayed one by square in order with theirs Names, Image (official-artwork) and PokedexNumber (a.k.a Id)
 
# Tips
  - For fetching Pokemon Image (official-artwork) and Moves (from Bonus Assignment) you´ll need to make a specific request for each pokemon passing his id or name as a parameter.
    - GET ( https://pokeapi.co/api/v2/pokemon/4 ) OR GET ( https://pokeapi.co/api/v2/pokemon/charmander ) will have the same result
  - Api Documentation for reference if needed ( https://pokeapi.co/ )

# Layout Reference
![alt text](https://raw.githubusercontent.com/carlosbbraga/pokedex-challenge/main/pokedex-challenge.jpg)

# Bônus Assignement
  - Paint the Borders of Pokemons that belong to the same evolution chain with the same color (Example pokemons 1, 2 and 3 -> Bulbasaur, Ivysaur and Venusaur should have the same border color) 
    - GET (https://pokeapi.co/api/v2/evolution-chain/1)
  - By Clicking on a Pokemon, a display must appear showing all of his "moves" (ex: "mega-punch") and his type "Ex: Fire" ), by clicking anywhere that display should close.

Created By Carlos Braga: (https://www.linkedin.com/in/carlos-braga-6b004650/)
