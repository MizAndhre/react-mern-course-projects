//

export const PokemonCard = ({ id, name, sprites = [] }) => {
	return (
		<section style={{ height: 100 }} className='mb-5'>
			<h4 className='text-capitalize'>
				#{id} - {name}
			</h4>

			<div>
				{sprites.map((sprite) => (
					<img src={sprite} alt={name} key={sprite} />
				))}
			</div>
		</section>
	);
};
