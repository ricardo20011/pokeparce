import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import axios from "axios";
import Habilidades from "./Habilidades";
import fondoCardPokemon from '../img/fondoCardPokemon.png';
import sombraPokemon from '../img/sombra.svg';

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
	const [debilidad, setDebilidad] = useState(false);
	const [descripcionAtaque, setDescripcionAtaque] = useState(false);
	
	useEffect(()=>{
		axios.get(props.data.species.url)
		.then((respuesta)=>{
			setEspecie(respuesta);
		});

		const habilidades = props.data.abilities.map((rest)=> axios.get(rest.ability.url));
		Promise.all(habilidades)
		.then((respuesta)=>{
			//respuesta.map((habilidad)=>{
			//	habilidad.data.flavor_text_entries.map((idioma)=>{
			//		if(idioma.language.name === 'es'){
			//			setHabilidad(idioma.flavor_text);
			//			console.log('hola');
			//		}
			//	})
			//});
			setHabilidad(respuesta);
			//console.log(respuesta);
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

			axios.get(props.data.types[0].type.url)
			.then((respuesta)=>{
				setDebilidad(respuesta.data.damage_relations.double_damage_from[0].name);
			})
			.catch(err => console.log(err))

			axios.get(props.data.moves[0].move.url)
			.then((respuesta)=>{
				respuesta.data.flavor_text_entries.map((idioma)=>{
					if(idioma.language.name === 'es'){
						setDescripcionAtaque(idioma.flavor_text);
					}
				});
			})
		}
	)
	const cerrarTarjeta = () => {
		props.mostrarPokemon(false);
	}
	//console.log(props.data);

  return(
		<>
			<div className="fixed z-30 left-cardX top-cardY h-130 w-110 p-5 bg-[#34d399] rounded-md">
				<div className="relative w-full flex flex-col justify-between h-full border-solid border-[1px] border-[#ca8a04] rounded-lg">
					<div className="bg-[#136f4d] w-8 h-8 rounded-full absolute right-[-35px] top-[-32px] flex justify-center items-center cursor-pointer hover:bg-[#0a442f] "
						onClick={cerrarTarjeta}
					>
						<Icon icon="pajamas:close" color="white" width="20" />
					</div>
					<div className="flex justify-between items-center my-1 relative left-[-10px]">
						<button className="bg-[#fafafa] rounded-xl px-5 font-bold">{tipo}</button>
						<p className="font-bold mx-2">{nombreMayusculas}</p>
						<div className="flex items-center">
							<p className="font-bold text-gray-700"><span className="text-sm">Ps</span>{props.data.base_experience}</p>
							<Icon className="w-5 h-5" icon="ic:twotone-catching-pokemon" />
						</div>
					</div>

					<div className="w-full flex flex-col items-center">
						<div  style={{ backgroundImage: `url(${fondoCardPokemon})` }} className="relative h-[200px] flex justify-center items-center w-10/12 mx-auto rounded-md border-2 border-solid border-[#996b08] bg-contain bg-no-repeat ">
							<img className="w-6/12 max-h-48" src={props.data.sprites.other.dream_world.front_default} alt="" />
							<img src={sombraPokemon} className="absolute bottom-2"/>
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
						<button className="bg-[#fafafa] rounded-xl text-[11px] px-5">Habitad: {especie !== false ?especie.data.habitat.name : false} Debilidad: {debilidad !== false ? debilidad : false}</button>
						<button className="bg-[#fafafa] rounded-xl text-[11px] px-5">{props.data.moves[0].move.name}</button>
					</div>

					<div className="w-full flex justify-between">
						<div className="flex flex-col w-4/12 mx-4">
							<p className="text-sm">Ilus: Varon - Rick</p>
							<div className="flex  items-center">
								<Icon className="mx-1" icon="ic:twotone-catching-pokemon" />
								<p className="text-sm">Raresa: {especie !== false ? especie.data.capture_rate : true}</p>
							</div>
							<p className="text-[11px]">@Copyring 2023</p>
						</div>

						<div className="w-8/12 mx-2 my-1">
							<p className="text-[10px]">{descripcionAtaque !== false ? descripcionAtaque : false}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CardFinal;