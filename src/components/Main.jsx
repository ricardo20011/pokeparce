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


  const [paginaActual, setPaginaActual] = useState(1);
	const [pokemonesPorPagina, setPokemonesPorPagina] = useState(6);
	
	const [tipoPokemon, setTipoPokemon] = useState('pokemon/');
  
  const indexUltimoPokemon = paginaActual * pokemonesPorPagina;
  const indexPrimerPokemon = indexUltimoPokemon - pokemonesPorPagina;
  const pokemones = pokemon?.slice(indexPrimerPokemon, indexUltimoPokemon);


	useEffect(()=>{
		axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonesPorPagina}&offset=${indexPrimerPokemon}`)
		.then((respuesta)=>{
			if(respuesta.data && respuesta.data.results){
				if(respuesta.status === 200){
					const pokemonUrl = respuesta.data.results.map((pokemon) => axios.get(pokemon.url));
	
					Promise.all(pokemonUrl)
						.then((respuesta)=>{
							setPokemon(respuesta);
						})  
						.catch(error => console.log(error))
					}  
			}})    
			.catch((error)=>{
				console.log(error);
			})  
	},[tipoPokemon,indexUltimoPokemon,indexPrimerPokemon]);    
	
  console.log(pokemon);


	
	const handleInputPokemonPagina = (e) => {
    setPokemonesPorPagina(e.target.value)
		//setPokemonesPagina(parseInt(e.target.value));
		//setPokemonInicioTipo(parseInt(e.target.value));
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
							value={pokemonesPorPagina} 
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
							pokemones.map((pokemonInfo)=>{
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
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
				/>
				<BotonSiguiente 
					name="Pagina Siguiente"
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
				/>
			</div>
		</div>
  );
}


export default Main;