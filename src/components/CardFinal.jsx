import React from "react";
import SombraPokemon from '../img/sombra.svg';
import { Icon } from '@iconify/react';


const CardFinal = (props) => {
	console.log(props.data);

	const nombreMayusculas = props.data.name.toUpperCase();

  return(
		<>
			<div className="fixed z-30 left-cardX top-cardY h-130 w-110 p-5 bg-[#34d399] rounded-md">
				<div className="relative border-solid border-[1px] border-[#ca8a04] rounded-lg">
					<div className="flex justify-between items-center my-1 relative left-[-10px]">
						<button className="bg-[#fafafa] rounded-xl px-5 font-bold">Basico</button>
						<p className="font-bold mx-2">{nombreMayusculas}</p>
						<div className="flex">
							<p className="font-bold text-gray-700"><span className="text-sm">Ps</span>120</p>
							<Icon className="w-5 h-5" icon="ic:twotone-catching-pokemon" />
						</div>
					</div>

					<div className="w-full flex flex-col items-center">
						<div className="bg-gray-500 h-56 flex justify-center items-center w-10/12 mx-auto rounded-md border-2 border-solid border-[#996b08]">
							<img className="w-8/12 max-h-48" src={props.data.sprites.other.dream_world.front_default} alt="" />
						</div>
						<div className="w-8/12 bg-[#115e59] text-center rounded-b-md">
							<p className="text-[10px] py-1 text-white">Peso: 40kg Altura: 30cm Especie:N Especie Nº 541</p>
						</div>
					</div>

					<div className="w-full px-4 my-2">
						<div className="flex flex-row justify-between">
							<p className="font-bold">PRIMER HABILIDAD</p>
							<div className="flex">
								<Icon className="w-6 h-6" icon="ic:twotone-catching-pokemon" />
								<Icon className="w-6 h-6" icon="ic:twotone-catching-pokemon" />
								<Icon className="w-6 h-6" icon="ic:twotone-catching-pokemon" />
							</div>
						</div>
						<p className="text-gray-800 text-sm leading-4">Descripcion de la habilidad del pokemon dependiendo lo que diga la API, los pokemones tienen de una a dos habilidades por mostrar.</p>
					</div>

					<div className="w-full px-4 my-2">
						<div className="flex flex-row justify-between">
							<p className="font-bold">SEGUNDA HABILIDAD</p>
							<div className="flex">
								<Icon className="w-6 h-6" icon="ic:twotone-catching-pokemon" />
								<Icon className="w-6 h-6" icon="ic:twotone-catching-pokemon" />
								<Icon className="w-6 h-6" icon="ic:twotone-catching-pokemon" />
							</div>
						</div>
						<p className="text-gray-800 text-sm leading-4">Descripcion de la habilidad del pokemon dependiendo lo que diga la API, los pokemones tienen de una a dos habilidades por mostrar.</p>
					</div>

					<div>
						<button>Debilidad: Nombre Resistencia: Nombre</button>
						<button>Retirada</button>
					</div>

					<div>
						<div>
							<p>Ilus: Varon - Rick</p>
							<div>
								<Icon icon="ic:twotone-catching-pokemon" />
								<p>40/258</p>
							</div>
							<p>@Copyring 2023</p>
						</div>

						<div>
							<p>Descripcion de un ataque del pokemon dependiendo lo que diga la API, los pokemones 	tienen de una a dos habilidades por mostrar.</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CardFinal;