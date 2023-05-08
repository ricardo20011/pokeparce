import React, { useEffect, useState } from "react";
import axios from "axios";


const Main = () => {
	const [pokemon, setPokemon] = useState([]);


	useEffect(()=>{
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=5&offset=5')
		.then((respuesta)=>{
			if(respuesta.status === 200){
				
				respuesta.data.results.map((pokemon)=>{
					setPokemon(pokemon.url);



					axios.get(pokemon.url)
					.then(async(pokemon) => {
						const pokemonUnico = await fetch(pokemon.url);
						setPokemon(pokemon.data)
						//console.log(pokemonUnico);
						}
					)
					.catch(error => console.log(error))
				});
				console.log(pokemon);
			}
		})
		.catch((error)=>{
			console.log(error);
		})
	},[]);



  return(
    <div className="w-10/12 mx-auto flex flex-col items-end pt-20 box-border">
			<div className="w-full flex mx-auto">
				<div className="w-4/12 p-8 box-border">
					<p className="text-lg mb-5 font-bold text-gray-700">Filtros para los pokeparces:</p>
					
					<div className="my-10">
						<p className="text-lg mb-2 font-bold text-gray-700">Tipo:</p>
						<div className="flex flex-wrap">
							<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Tipo 1</button>
							<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Tipo 2</button>
							<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Tipo 3</button>
							<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Tipo 4</button>
							<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Tipo 5</button>
							<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Tipo 6</button>
							<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Tipo 7</button>
						</div>
					</div>
					<div className="my-10">
						<p className="text-lg mb-2 font-bold text-gray-700">Region:</p>
						<div className="flex flex-wrap">
								<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Region 1</button>
								<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Region 2</button>
								<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Region 3</button>
								<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Region 4</button>
								<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Region 5</button>
								<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Region 6</button>
								<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Region 7</button>
						</div>
					</div>

					<div className="my-10">
						<p className="text-lg font-bold text-gray-700">Altura:</p>
						<p>Desde:</p>
						<p>Hasta:</p>
						<input type="range" min="0" max="100" />
					</div>
					<div className="my-10">
						<p className="text-lg font-bold text-gray-700">Peso:</p>
						<p>Desde:</p>
						<p>Hasta:</p>
						<input type="range" min="0" max="100" />
					</div>
					<div className="my-10">
						<p className="text-lg font-bold text-gray-700 mb-2">Evolucion:</p>
						<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Normal</button>
							<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Evolicion 2</button>
							<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 ml-1 mb-2 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Evolucion 3</button>
					</div>
				</div>
				<div className="w-8/12 flex flex-wrap content-start justify-between">
				{
					//pokemon.map((pokemon)=>{
					//		return(
					//			<div key={pokemon.name} className="relative w-52 flex flex-col content-center items-center mb-20 cursor-pointer">
					//				<img className="w-full h-44 max-h-44" src={Pokemon1} alt="" />
					//				<img className="absolute bottom-9 select-none" src={SombraPokemon} alt="" />
					//				<p className="text-lg font-semibold text-gray-800">{pokemon.name}</p>
					//				<p className="text-gray-600">Habilidad</p>
					//			</div>
					//		)
					//	})
				}
				</div>

			</div>

			<div className="w-8/12 flex justify-center pb-44">
				<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 mx-5 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Pagina Anterior</button>
				<button className="border-4 border-blue-400 rounded-lg text-blue-900 bg-transparent px-4 py-2 mx-5 hover:bg-blue-400 hover:text-white ease-in-out duration-200">Pagina Siguiente</button>
			</div>
		</div>
  );
}


export default Main;