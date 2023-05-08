import React from "react";
import IconoImagen from '../img/IconoHeader.png';
import { Icon } from '@iconify/react';

const Header = () => {
  return(
		<div className="sticky flex items-center top-0 left-0 w-full bg-azulOscuro bg-opacity-20 backdrop-blur-sm h-18 mx-auto z-50">
			<div className="3xl:w-10/12 5xl:w-8/12 mx-auto flex justify-between">
				
				<img className="w-72" src={IconoImagen} alt=""/>

				<div className="w-96 flex items-center relative">
					<input className="w-10/12 h-9 rounded-xl px-3 outline-none" type="text" name="" placeholder="Escribe nombre de pokemon..." id="" />
					<Icon className="absolute right-20 cursor-pointer" icon="ph:magnifying-glass-bold" color="gray" width="25" />
				</div>

				<div className="grid grid-cols-2 grid-rows-2">
					<div className="flex mx-4 items-center">
						<Icon className="cursor-pointer" icon="ion:logo-facebook" color="white" width="25" />
						<a href="·" className="text-sm text-white ml-1 cursor-pointer">Sigueme en facebook</a>
					</div>
					<div className="flex mx-4 items-center">
						<Icon className="cursor-pointer" icon="ph:linkedin-logo-fill" color="white" width="28" />
						<a href="·" className="text-sm text-white ml-1 cursor-pointer">Sigueme en Linkedin</a>
					</div>
					<div className="flex mx-4 items-center">
						<Icon className="cursor-pointer" icon="iconoir:figma" color="white" width="28" />
						<a href="·" className="text-sm text-white ml-1 cursor-pointer">Sigueme en Figma</a>
					</div>
					<div className="flex mx-4 items-center">
						<Icon className="cursor-pointer" icon="radix-icons:github-logo" color="white" width="23" />
						<a href="·" className="text-sm text-white ml-1 cursor-pointer">Sigueme en GitHub</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;