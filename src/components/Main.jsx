import React, { useEffect, useState } from "react";
import axios from "axios";
import Boton from "./Boton";
import Card from "./Card";
import FiltroPokemones from "./FiltroPokemones";
import { v4 as uuidv4 } from "uuid";
import Habilidad from "./Habilidad";

const Main = () => {
	const [pokemon, setPokemon] = useState([]);
	//const [pokemonInicio, setPokemonInicio] = useState(0);
	//const [pokemonesPorPag, setPokemonesPorPag] = useState(2);

	//const paginaSiguiente = () => {
	//	setPokemonInicio(pokemonInicio + 2);
	//}

	useEffect(()=>{
		axios.get(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=0`)
		.then((respuesta)=>{
			if(respuesta.status === 200){
				//console.log(respuesta);
				const pokemonUrl = respuesta.data.results.map((pokemon) => axios.get(pokemon.url));
				//console.log(pokemonUrl);

				Promise.all(pokemonUrl)
					.then((respuesta)=>{
						setPokemon(respuesta);
						//console.log(pokemonData);
					})
					.catch(error => console.log(error))
				}
			})
			.catch((error)=>{
				console.log(error);
			})
		},[]);
		

  return(
    <div className="w-10/12 mx-auto flex flex-col items-end pt-20 box-border">
			<div className="w-full flex mx-auto">

				<FiltroPokemones />

				<div className="w-8/12 flex flex-wrap content-start justify-between">
					{
						pokemon.map((pokemonInfo)=>{
							return(
								<Card
									pokemon={pokemon}
									id = {pokemonInfo.data.id}
									key = { uuidv4() }
									img = {pokemonInfo.data.sprites.other.dream_world.front_default}
									name = {pokemonInfo.data.name}
									ability = { 
										pokemonInfo.data.abilities.length !== 1
										? 
										<>
											<Habilidad habilidad={pokemonInfo.data.abilities[0].ability.name} />
											<Habilidad habilidad={pokemonInfo.data.abilities[1].ability.name} />
										</> 
										: 
										<Habilidad habilidad={pokemonInfo.data.abilities[0].ability.name} />
									}
								/>
							)
						})
					}
				</div>
			</div>

			<div className="w-8/12 flex justify-center pb-44">
				<Boton name="Pagina Siguiente" />
				<Boton name="Pagina Anterior" />
			</div>
		</div>
  );
}


export default Main;