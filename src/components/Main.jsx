import React, { useEffect, useState } from "react";
import axios from "axios";
import BotonAnterior from "./BotonAnterior";
import BotonSiguiente from "./BotonSiguiente";
import Card from "./Card";
import FiltroPokemones from "./FiltroPokemones";
import { v4 as uuidv4 } from "uuid";
import Habilidad from "./Habilidad";

const Main = () => {
	const [pokemon, setPokemon] = useState([]);
	const [pokemonInicio, setPokemonInicio] = useState(0);
	const [pokemonesPagina, setPokemonesPagina] = useState(6);

	const [pokemonInicioTipo, setPokemonInicioTipo] = useState(pokemonesPagina);
	


	const [tipoPokemon, setTipoPokemon] = useState('pokemon/')



	useEffect(()=>{
		axios.get(`https://pokeapi.co/api/v2/${tipoPokemon}?limit=${pokemonesPagina}&offset=${pokemonInicio}`)
		.then((respuesta)=>{
			if(respuesta.data && respuesta.data.results){
				console.log('trae resultados de todos los pokemones');
				if(respuesta.status === 200){
					console.log(respuesta);
					const pokemonUrl = respuesta.data.results.map((pokemon) => axios.get(pokemon.url));
					//console.log(pokemonUrl);
	
					Promise.all(pokemonUrl)
						.then((respuesta)=>{
							setPokemon(respuesta);
							//console.log(pokemonData);
						})
						.catch(error => console.log(error))
					}
			} else if (respuesta.data && respuesta.data.pokemon){
				//console.log(respuesta);

				const tipoPokemonesPagina = respuesta.data.pokemon.slice(pokemonInicio, pokemonInicioTipo).map(pokemon => axios.get(pokemon.pokemon.url));

				console.log(respuesta.data.pokemon.slice(pokemonInicio, pokemonInicioTipo));
				console.log(pokemonInicio);
				console.log(pokemonInicioTipo);

				Promise.all(tipoPokemonesPagina)
					.then((respuesta)=>{
						setPokemon(respuesta);
					})
					.catch(error => console.log(error));
			}
			})
			.catch((error)=>{
				console.log(error);
			})
	},[pokemonInicio,pokemonesPagina,tipoPokemon,pokemonInicioTipo]);
	
	
	const handleInputPokemonPagina = (e) => {
		setPokemonesPagina(parseInt(e.target.value));
		setPokemonInicioTipo(parseInt(e.target.value));
		//console.log(pokemonesPagina);
	}

  return(
    <div className="w-10/12 mx-auto flex flex-col items-end pt-20 box-border">
			<div className="w-full flex mx-auto">

				<FiltroPokemones 
					setTipoPokemon={setTipoPokemon}
					tipoPokemon={tipoPokemon}
				/>

				<div className="flex flex-col w-8/12 items-end">
					<div className="mb-5 flex items-center">
						<p className="mr-2">Pokemones a mostrar:</p>
						<select 
							className="border-2 border-blue-500 bg-transparent rounded-md px-2 py-[2px] pr-4"
							value={pokemonesPagina} 
							onChange={(e)=>handleInputPokemonPagina(e)}
						>
							<option value={3}>3</option>
							<option value={6}>6</option>
							<option value={12}>12</option>
							<option value={20}>20</option>
							<option value={40}>40</option>
						</select>
					</div>
					<div className="w-full flex flex-wrap content-start justify-between">
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

			</div>

			<div className="w-8/12 flex justify-center pb-44">
				<BotonAnterior 
					name="Pagina Anterior" 
					setPokemonInicio={setPokemonInicio} 
					pokemonInicio={pokemonInicio}
					pokemonesPorPagina={pokemonesPagina}
					setPokemonInicioTipo={setPokemonInicioTipo} 
				/>
				<BotonSiguiente 
					name="Pagina Siguiente" 
					setPokemonInicio={setPokemonInicio} 
					pokemonInicio={pokemonInicio}
					pokemonesPorPagina={pokemonesPagina}
					setPokemonInicioTipo={setPokemonInicioTipo} 
					//etPokemonInicioTipo={setPokemonInicioTipo}
					//etPokemonInicioTipoPagina={setPokemonInicioTipoPagina}
				/>
			</div>
		</div>
  );
}


export default Main;