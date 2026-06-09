import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
	test('should getHeroById devolver un heroe por ID ', () => {
		const id = 1;

		const hero = getHeroeById(id);

		expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
	});

	//
	test('should getHeroById retornar undefined si no existe ID', () => {
		const id = 100;

		const hero = getHeroeById(id);

		expect(hero).toEqual(undefined);
		expect(hero).toBeFalsy();
	});

	//
	test('should getHeroesByOwner retornar heroes de DC && Lenght de 3', () => {
		const owner = 'DC';

		const heroesByOwner = getHeroesByOwner(owner);

		expect(heroesByOwner).toHaveLength(3);

		expect(heroesByOwner).toEqual([
			{ id: 1, name: 'Batman', owner: 'DC' },
			{ id: 3, name: 'Superman', owner: 'DC' },
			{ id: 4, name: 'Flash', owner: 'DC' },
		]);

		expect(heroesByOwner).toEqual(heroes.filter((heroe) => heroe.owner === owner));
	});

	test('should getHeroesByOwner retornar heroes de Marvel && length de 2', () => {
		const owner = 'Marvel';

		const heroesByOwner = getHeroesByOwner(owner);

		expect(heroesByOwner).toEqual(heroes.filter((heroe) => heroe.owner === owner));

		expect(heroesByOwner).toHaveLength(2);
		expect(heroesByOwner.length).toBe(2);
	});
});
