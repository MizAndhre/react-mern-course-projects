// import { useEffect, useReducer } from "react";
// import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

// const initialState = [];
// const init = () => {
// 	return JSON.parse(localStorage.getItem("todos")) || [];
// };

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleDeleteTodo,
		handleCompleteTodo,
		handleNewTodo,
	} = useTodos();

	// const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

	// useEffect(() => {
	// 	localStorage.setItem("todos", JSON.stringify(todos));
	// }, [todos]);

	// const handleNewTodo = (todo) => {
	// 	const action = {
	// 		type: "[TODO] Add Todo",
	// 		payload: todo,
	// 	};

	// 	dispatchTodo(action);
	// };

	// const handleDeleteTodo = (id) => {
	// 	dispatchTodo({
	// 		type: "[TODO] Remove Todo",
	// 		payload: id,
	// 	});
	// };
	// const handleCompleteTodo = (id) => {
	// 	dispatchTodo({
	// 		type: "[TODO] Complete Todo",
	// 		payload: id,
	// 	});
	// };

	return (
		<>
			<h1>
				TodoApp: {todosCount}{" "}
				<small className='d-block fs-3 mt-1'>Pendientes: {pendingTodosCount}</small>
			</h1>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList
						todosList={todos}
						onDeleteTodo={handleDeleteTodo}
						onCompleteTodo={handleCompleteTodo}
					/>
				</div>

				<div className='col-5 border-start border-dark-subtle'>
					<h4>Agregar ToDo</h4>
					<hr />

					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
