import React from "react";
import Barra from "./Barra";
import ContenedorBoton from "./ContenedorBoton";
import Boton from './Boton';


const FiltroPokemones = (props) => {
  return(
    <div className="w-4/12 p-8 box-border">
					<p className="text-lg mb-5 font-bold text-gray-700">Filtros para los pokeparces:</p>
					
					<ContenedorBoton title="Tipo:" >
						<Boton name="Normal" />
						<Boton name="Fighting" />
						<Boton name="Flying" />
						<Boton name="Poison" />
						<Boton name="Ground" />
						<Boton name="Rock" />
						<Boton name="Ghost" />
						<Boton name="Steel" />
						<Boton name="Fire" />
						<Boton name="Water" />
						<Boton name="Grass" />
						<Boton name="Electric" />
						<Boton name="Ice" />
						<Boton name="Dragon" />
						<Boton name="Dark" />
						<Boton name="Fairy" />
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