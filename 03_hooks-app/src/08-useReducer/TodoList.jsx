/* eslint-disable react/prop-types */

import { TodoItem } from "./TodoItem";

export const TodoList = ({ todosList = [], onDeleteTodo, onCompleteTodo }) => {
	return (
		<ul className='list-group'>
			{todosList.map((todo) => (
				<TodoItem
					key={todo.id}
					todoItem={todo}
					onDeleteTodo={onDeleteTodo}
					onCompleteTodo={onCompleteTodo}
				/>
			))}
		</ul>
	);
};
