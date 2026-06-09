// console.log("casdg");

const initialState = [
	{
		id: 1,
		todo: "Comprar semillas",
		done: false,
	},
];

//debe recibir un estado y una accion
//debe devolver un estado
const todoReducer = (state = initialState, action) => {
	//se cambia el estado => regresar un nuevo estado

	if (action?.type === "[TODO] add todo") {
		return [...state, action.payload];
	}

	return state;
};

let todos = todoReducer();
// para modificar el estado, hay que mandar una accion
const newTodo = {
	id: 2,
	todo: "Plantar las semillas",
	done: false,
};

// acciones
const addTodoAction = {
	type: "[TODO] add todo", // saber tipo de accion
	payload: newTodo, // payload => action a realizar
};

todos = todoReducer(todos, addTodoAction);

todos = todoReducer(todos, {
	type: "[TODO] add todo", // saber tipo de accion
	payload: {
		id: 3,
		todo: "Regar las semillas",
		done: false,
	}, // payload => action a realizar
});

console.log({ state: todos });
