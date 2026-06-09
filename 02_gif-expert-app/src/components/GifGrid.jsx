// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { Cargando, GifItem } from "./";

export const GifGrid = ({ categoria }) => {
	const { imagenes, cargando } = useFetchGifs(categoria);

	return (
		<>
			<h3 className='text-6xl font-bold text-white  mb-7 capitalize animate__animated animate__backInUp'>
				{categoria}
			</h3>

			{cargando && <Cargando />}

			<div className='grid grid-cols-1 md:grid-cols-2 gap-10  lg:grid-cols-4 border-b-2 border-stone-800 pb-12 mb-10 animate__animated animate__fadeInUp animate__delay-1s'>
				{imagenes.map((imagen) => (
					<GifItem key={imagen.id} {...imagen} />
				))}
			</div>
		</>
	);
};

// ? Otra opción
// imagenes.map(({ id, titulo, url } ) => (
// 	 <GifItem key={id} titulo={titulo} url={url} />
// )
