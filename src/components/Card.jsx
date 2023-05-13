import React, { useState } from "react";
import SombraPokemon from '../img/sombra.svg';
import CardFinal from "./CardFinal";


const Card = (props) => {
	const [pokemon, setPokemon] = useState(false);
	
	const validarInf = () => {
		props.pokemon.map((pokemon)=>{
			if(props.id === pokemon.data.id){
				return(
					setPokemon(pokemon.data)
					);
				}
			}
		);
	}
	

  return(
		<>
			<div onClick={ ()=> validarInf()} className="relative w-52 flex flex-col content-center items-center mb-20 cursor-pointer">
				<img className="w-full h-44 max-h-44 mb-3" src={props.img} alt="" />
				<img className="absolute bottom-16 select-none" src={SombraPokemon} alt="" />
				<p className="text-lg font-semibold text-gray-800">{props.name}</p>
				{props.ability}
			</div>
			{pokemon != false ? <CardFinal data={pokemon} /> : true}
		</>
	);
}

export default Card;