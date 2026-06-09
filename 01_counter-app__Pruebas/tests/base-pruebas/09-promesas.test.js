import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';
import heroes from '../../src/data/heroes';

// describe('Pruebas en 09-promesas', () => {
// 	//
// 	test('should getHeroeByIdAsync retornar un heroe', (done) => {
// 		const id = 1;

// 		getHeroeByIdAsync(id).then((hero) => {
// 			expect(hero).toEqual({
// 				id: 1,
// 				name: 'Batman!',
// 				owner: 'DC',
// 			});

// 			done();
// 		});
// 	});

// 	//
// 	test('should getHeroeByIdAsync retornar un error si heroe no existe', (done) => {
// 		const id = 100;

// 		getHeroeByIdAsync(id).catch((error) => {
// 			expect(error).toBe(`No se pudo encontrar el héroe`);
// 			done();
// 		});
// 	});
// });

// ? Comentario
describe('Pruebas con promesas', () => {
	test('getHeroesByIdAsync debe retornar un héroe async', () => {
		const id = 1;
		// expect(getHeroeByIdAsync(id)).resolves.toBe(heroes[0]);

		expect(getHeroeByIdAsync(id)).resolves.toEqual({
			id: 1,
			name: 'Batman!',
			owner: 'DC',
		});
	});

	test('debe de obtener un error si el heroe por id no existe', () => {
		const id = 10;
		expect(getHeroeByIdAsync(id)).rejects.toBe('No se pudo encontrar el héroe');
	});
});
