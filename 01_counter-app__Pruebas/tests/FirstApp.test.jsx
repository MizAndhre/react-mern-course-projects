import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp/>', () => {
	//
	// test('should hacer match con el snapshot', () => {
	// 	const titulo = 'Hola, soy Hela';
	// 	const { container } = render(<FirstApp titulo={titulo} />);
	// 	expect(container).toMatchSnapshot();
	// });

	//
	test('should mostrar titulo en un H2', () => {
		const titulo = 'Hola, soy Hela';

		const { container, getByText, getByTestId } = render(<FirstApp titulo={titulo} />);

		expect(getByText(titulo)).toBeTruthy();
		//en el render existe ese texto || titulo

		// ! NO Recomendado
		// const h2 = container.querySelector('h2');
		// expect(h2.innerHTML).toBe(titulo);

		expect(getByText(titulo)).toBeTruthy();

		//? Evaluar que se encuentre el titulo
		// expect(getByTestId('test-title')).toBeTruthy();
		// expect(getByTestId('test-title').innerHTML).toBe(titulo); //=> Es más exacto
		expect(getByTestId('test-title').innerHTML).toContain(titulo); //=> Permite espacios en blanco
	});

	test('should mostrar el subtitulo enviado', () => {
		const titulo = 'Hola, soy Hela';
		const subtitulo = 'Hola, subtitlo';

		const { getByText, getAllByText } = render(
			<FirstApp titulo={titulo} subtitulo={subtitulo} />
		);

		//? exista el subtitulo
		// expect(getByText(subtitulo)).toBeTruthy();

		//? existan multiples subtitulos
		expect(getAllByText(subtitulo).length).toBe(2);
	});
});

// TODO: Mejorar las pruebas
