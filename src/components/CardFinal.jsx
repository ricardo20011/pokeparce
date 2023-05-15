import React, { useEffect, useState } from "react";
import SombraPokemon from '../img/sombra.svg';
import { Icon } from '@iconify/react';
import axios from "axios";
import Habilidades from "./Habilidades";


const CardFinal = (props) => {
	
	const nombreMayusculas = props.data.name.toUpperCase();
	const altura = props.data.height * 10;
	const tipo = props.data.types[0].type.name.charAt(0).toUpperCase() + props.data.types[0].type.name.slice(1);
	const primerHabilidadMayuscula = props.data.abilities[0].ability.name.toUpperCase();
	const [segundaHabilidadMayuscula, setSegundaHabilidadMayuscula] = useState('');
	
	useEffect(()=>{
		if(props.data.abilities.length >= 2){
			setSegundaHabilidadMayuscula(props.data.abilities[1].ability.name.toUpperCase());
		}
	},[])
	
	
	
	const [especie, setEspecie] = useState(false);
	const [habilidad, setHabilidad] = useState(false);
	const [nombreEspecie, setNombreEspecie] = useState(false);
	
	useEffect(()=>{
		axios.get(props.data.species.url)
		.then((respuesta)=>{
			setEspecie(respuesta);
		});

		const habilidades = props.data.abilities.map((rest)=> axios.get(rest.ability.url));
		Promise.all(habilidades)
		.then((respuesta)=>{
			setHabilidad(respuesta);
		})

	},[])

	useEffect(()=>{
			if(especie !== false){
				especie.data.genera.map((idiomaEspecie)=>{
					if(idiomaEspecie.language.name === "es"){
						setNombreEspecie(idiomaEspecie.genus);
					}
				});
			}
		})
		
	console.log(especie);

  return(
		<>
			<div className="fixed z-30 left-cardX top-cardY h-130 w-110 p-5 bg-[#34d399] rounded-md">
				<div className="relative flex flex-col justify-between h-full border-solid border-[1px] border-[#ca8a04] rounded-lg">
					<div className="flex justify-between items-center my-1 relative left-[-10px]">
						<button className="bg-[#fafafa] rounded-xl px-5 font-bold">{tipo}</button>
						<p className="font-bold mx-2">{nombreMayusculas}</p>
						<div className="flex items-center">
							<p className="font-bold text-gray-700"><span className="text-sm">Ps</span>{props.data.base_experience}</p>
							<Icon className="w-5 h-5" icon="ic:twotone-catching-pokemon" />
						</div>
					</div>

					<div className="w-full flex flex-col items-center">
						<div className="bg- h-56 flex justify-center items-center w-10/12 mx-auto rounded-md border-2 border-solid border-[#996b08]">
							<img className="w-8/12 max-h-48" src={props.data.sprites.other.dream_world.front_default} alt="" />
						</div>
						<div className="w-9/12 bg-[#115e59] text-center rounded-b-md">
							<p className="text-[9px] py-1 text-white">Peso: {props.data.weight}kg Altura: {altura}cm Especie: {nombreEspecie !== false ? nombreEspecie : false} Nº{props.data.id}</p>
						</div>
					</div>

					{
					props.data.abilities.length !== 1 
					?
					<>
						<Habilidades 
							Nombrehabilidad = {primerHabilidadMayuscula}
							habilidad = {habilidad !== false && habilidad.length !== 1 ? habilidad[0] : false}
						/>
						<Habilidades 
							Nombrehabilidad = {segundaHabilidadMayuscula}
							habilidad = {habilidad !== false && habilidad.length !== 1 ? habilidad[1] : false}
						/>
					</>
					:
					<Habilidades 
						Nombrehabilidad = {primerHabilidadMayuscula}
						habilidad = {habilidad !== false && habilidad.length === 1 ? habilidad[0] : false}
					/>
					}


					<div className="relative left-[-10px] flex justify-between">
						<button className="bg-[#fafafa] rounded-xl text-[11px] px-5">Habitad: {especie !== false ?especie.data.habitat.name : false} Resistencia: Nombre</button>
						<button className="bg-[#fafafa] rounded-xl text-[11px] px-5">Retirada</button>
					</div>

					<div className="w-full flex">
						<div className="flex flex-col w-4/12 mx-4">
							<p className="text-sm">Ilus: Varon - Rick</p>
							<div className="flex  items-center">
								<Icon className="mx-1" icon="ic:twotone-catching-pokemon" />
								<p className="text-sm">Raresa: {especie !== false ? especie.data.capture_rate : true}</p>
							</div>
							<p className="text-[11px]">@Copyring 2023</p>
						</div>

						<div className="w-8/12 mx-2 my-1">
							<p className="text-[10px]">Descripcion de un ataque del pokemon dependiendo lo que diga la API, los pokemones 	tienen de una a dos habilidades por mostrar.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CardFinal;