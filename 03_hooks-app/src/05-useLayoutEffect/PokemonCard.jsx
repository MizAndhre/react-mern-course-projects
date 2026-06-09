//

import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
	const divRef = useRef();
	const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

	useLayoutEffect(() => {
		const { height, width } = divRef.current.getBoundingClientRect();

		setBoxSize({ height, width });
	}, [sprites]);

	return (
		// <section style={{ height: 100 }} className='mb-5'>
		<section className='mb-5'>
			<h4 className='text-capitalize'>
				#{id} - {name}
			</h4>

			<div ref={divRef}>
				{sprites.map((sprite) => (
					<img src={sprite} alt={name} key={sprite} />
				))}
			</div>

			<code>{JSON.stringify(boxSize)}</code>
		</section>
	);
};
