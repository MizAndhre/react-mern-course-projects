import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en < CounterApp />', () => {
	const initialValue = 50;

	test('should hacer match con el snapshot', () => {
		const { container } = render(<CounterApp value={initialValue} />);
		expect(container).toMatchSnapshot();
	});

	test('should mostrar el valor inciial de 100', () => {
		render(<CounterApp value={100} />);
		expect(screen.getByText(100)).toBeTruthy();
		// expect( screen.getByRole('heading',{ level: 2}).innerHTML ).toContain('100')
	});

	//? Simular Clics
	test('should incrementar con el boton +1', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('+1')); //?/=> clic
		expect(screen.getByText('51')).toBeTruthy();
	});

	test('should disminuir con el boton -1', () => {
		render(<CounterApp value={initialValue} />);
		fireEvent.click(screen.getByText('-1')); //?/=> clic
		expect(screen.getByText('49')).toBeTruthy();
	});

	test('should resetear el valor con boton reset', () => {
		render(<CounterApp value={initialValue} />);

		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));
		fireEvent.click(screen.getByText('+1'));

		// fireEvent.click(screen.getByText('Reset'));
		fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));

		expect(screen.getByText('50')).toBeTruthy();
	});
});
