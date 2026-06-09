/* eslint-disable react/prop-types */

const completeClasses = "fst-italic text-decoration-line-through text-secondary";

export const TodoItem = ({ todoItem, onDeleteTodo, onCompleteTodo }) => {
	return (
		<li className='list-group-item d-flex justify-content-between '>
			<span
				style={{ cursor: "pointer" }}
				onClick={() => onCompleteTodo(todoItem.id)}
				className={`align-self-center  
				${todoItem.done ? completeClasses : ""}
				 `}>
				{todoItem.description}
			</span>

			<button
				className='btn btn-outline-danger'
				onClick={() => onDeleteTodo(todoItem.id)}>
				Borrar
			</button>
		</li>
	);
};

//
