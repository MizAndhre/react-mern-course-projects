//
import { useCounter, useFetch, useForm } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultiplesCustomHooks = () => {
	const { counter, increment, decrement, setCounter } = useCounter(1);

	const { numero, handleInputChange } = useForm({ numero: "" });

	const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

	return (
		<>
			<h1>Multiples Custom Hooks</h1>
			<hr />

			<h2>Información de Pokemon</h2>

			<pre>Pokemon Info</pre>

			{isLoading ? (
				<LoadingMessage />
			) : (
				<PokemonCard
					// {...data}
					id={counter}
					name={data.name}
					sprites={[
						data.sprites.front_default,
						data.sprites.front_shiny,
						data.sprites.back_default,
						data.sprites.back_shiny,
					]}
				/>
			)}

			<h3 className='text-capitalize text-decoration-underline'>
				<span className='fs-4 fw-semibold'> {counter}:</span> {data?.name}
			</h3>

			<div
				className='d-flex align-items-center 
            justify-content-center mt-3'>
				<button
					className='btn btn-outline-primary '
					onClick={() => (counter > 1 ? decrement() : null)}>
					Anterior
				</button>

				<button className='btn btn-outline-danger ' onClick={() => increment()}>
					Siguiente
				</button>

				<input
					type='number'
					className='border-0 p-2 d-inline-block mx-2 fs-6'
					style={{ width: 100 }}
					name='numero'
					placeholder='Numero'
					value={numero}
					onChange={handleInputChange}
				/>

				<button className='btn btn-outline-dark ' onClick={() => setCounter(Number(numero))}>
					Buscar
				</button>
			</div>
		</>
	);
};
