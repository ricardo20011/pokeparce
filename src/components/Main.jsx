import React, { useEffect, useState } from "react";
import axios from "axios";
import SombraPokemon from '../img/sombra.svg';
import Boton from "./Boton";
import Barra from "./Barra";
import ContenedorBoton from "./ContenedorBoton";

const Main = () => {
	const [pokemon, setPokemon] = useState([]);
	//const [pokemonInicio, setPokemonInicio] = useState(0);
	//const [pokemonesPorPag, setPokemonesPorPag] = useState(2);

	//const paginaSiguiente = () => {
	//	setPokemonInicio(pokemonInicio + 2);
	//}

	useEffect(()=>{
		axios.get(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=0`)
		.then((respuesta)=>{
			if(respuesta.status === 200){
				const pokemonUrl = respuesta.data.results.map((pokemon) => axios.get(pokemon.url));

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
		
		console.log(pokemon);

		

  return(
    <div className="w-10/12 mx-auto flex flex-col items-end pt-20 box-border">
			<div className="w-full flex mx-auto">
				<div className="w-4/12 p-8 box-border">
					<p className="text-lg mb-5 font-bold text-gray-700">Filtros para los pokeparces:</p>
					
					<ContenedorBoton title="Tipo:" >
							<Boton name="Tipo 1" />
							<Boton name="Tipo 1" />
							<Boton name="Tipo 1" />
							<Boton name="Tipo 1" />
							<Boton name="Tipo 1" />
							<Boton name="Tipo 1" />
							<Boton name="Tipo 1" />
					</ContenedorBoton>

					<ContenedorBoton title="Region:">
						<Boton name="Region 1" />
						<Boton name="Region 2" />
						<Boton name="Region 3" />
						<Boton name="Region 4" />
						<Boton name="Region 5" />
						<Boton name="Region 6" />
					</ContenedorBoton>

					<Barra 
						title = "Altura:"
						parrafo1 = "Desde:"
						parrafo2 = "Hasta:"
					/>

					<Barra 
						title = "Pesa:"
						parrafo1 = "Desde:"
						parrafo2 = "Hasta:"
					/>

					<div className="my-10">
						<p className="text-lg font-bold text-gray-700 mb-2">Evolucion:</p>
						<Boton name="Normal" />
						<Boton name="Evolucion 2" />
						<Boton name="Evolucion 3" />
					</div>
				</div>

				<div className="w-8/12 flex flex-wrap content-start justify-between">
					{
						pokemon.map((pokemon)=>{
								return(
									<div key={pokemon.data.name} className="relative w-52 flex flex-col content-center items-center mb-20 cursor-pointer">
										<img className="w-full h-44 max-h-44" src={pokemon.data.sprites.other.dream_world.front_default} alt="" />
										<img className="absolute bottom-9 select-none" src={SombraPokemon} alt="" />
										<p className="text-lg font-semibold text-gray-800">{pokemon.data.name}</p>
										<p className="text-gray-600">Nº {pokemon.data.id}</p>
									</div>
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