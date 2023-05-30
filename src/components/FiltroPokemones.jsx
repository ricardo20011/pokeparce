import React from "react";
import Barra from "./Barra";
import ContenedorBoton from "./ContenedorBoton";
import Boton from './Boton';


const FiltroPokemones = (props) => {
  return(
    <div className="w-4/12 px-8 box-border">
					<p className="text-lg mb-5 font-bold text-gray-700">Filtros para los pokeparces:</p>
					
					<ContenedorBoton title="Tipo:" >
						<Boton 
							name="Mostrar Todos"
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="pokemon/"
						/>
						<Boton
							name="Normal" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/normal/"
						/>
						<Boton 
							name="Fighting"
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/fighting/"
						/>
						<Boton
							name="Flying" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/flying/"
						/>
						<Boton
							name="Poison" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/poison/"
						/>
						<Boton
							name="Ground" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/ground/"
						/>
						<Boton
							name="Rock" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/rock/"
						/>
						<Boton
							name="Ghost" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/ghost/"
						/>
						<Boton
							name="Steel" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/steel/"
						/>
						<Boton
							name="Fire" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/fire/"
						/>
						<Boton
							name="Water" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/water/"
						/>
						<Boton
							name="Grass" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/grass/"
						/>
						<Boton
							name="Electric" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/electric/"
						/>
						<Boton
							name="Ice" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/ice/"
						/>
						<Boton
							name="Dragon" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/dragon/"
						/>
						<Boton
							name="Dark" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/dark/"
						/>
						<Boton
							name="Fairy" 
							setTipoPokemon={props.setTipoPokemon} 
							tipoPokemon={props.tipoPokemon}
							tipo="type/fairy/"
						/>
					</ContenedorBoton>

					<ContenedorBoton title="Region:">
						<Boton name="Kanto" />
						<Boton name="Johto" />
						<Boton name="Hoenn" />
						<Boton name="Sinnoh" />
						<Boton name="Unova" />
						<Boton name="Kalos" />
						<Boton name="Alola" />
						<Boton name="Hisui " />
						<Boton name="Galar" />
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
	);
}

export default FiltroPokemones;