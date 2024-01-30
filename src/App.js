import React from 'react';

function App() {
	const [todo, setTodo] = React.useState({
		todo: '',
		id: '',
		done: false,
	});
	const [todoList, setTodoList] = React.useState([]);
	const [err, setErr] = React.useState('');
	const handleSubmit = () => {
		if (todo.todo === '') {
			return setErr('Não é permitido adicionar uma tarefa sem texto');
		}

		if (typeof todo.id === 'number') {
			handleUpdate();
		} else {
			setTodoList([{ id: todoList.length + 1, todo: todo.todo }, ...todoList]);
		}
		setErr('');
		setTodo({
			todo: '',
			id: '',
			done: false,
		});
	};

	const handleEdit = (todo) => {
		setTodo({ ...todo });
	};

	const handleUpdate = () => {
		const index = todoList.findIndex((t) => t.id === todo.id);

		if (index !== -1) {
			const updatedList = [...todoList];

			updatedList[index] = { ...todo };

			setTodoList(updatedList);
		}
	};

	const handleDelete = ({ id }) => {
		const newList = todoList.filter((el) => el.id !== id);
		setTodoList(newList);
	};

	const handleToggleDone = (id) => {
		const index = todoList.findIndex((t) => t.id === id);

		if (index !== -1) {
			const updatedList = [...todoList];

			updatedList[index].done = !updatedList[index].done;

			setTodoList(updatedList);
		}
	};

	return (
		<div style={{ padding: 8 }}>
			<h1>Add your task...</h1>
			<section>
				<div>
					<input
						value={todo.todo}
						type="text"
						onChange={(e) => setTodo({ ...todo, todo: e.target.value })}
					/>
					<button onClick={() => handleSubmit()}>
						{!todo.id ? 'Enviar' : 'Atualizar'}
					</button>
				</div>
				<p style={{ color: 'red' }}>{err}</p>
			</section>
			<section style={{ marginTop: '24px' }}>
				<h2>Todo List</h2>
				{todoList.map((el) => (
					<div
						key={el.id}
						style={{
							border: '1px solid black',
							width: 500,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: 4,
							margin: 4,
              color: el.done ? 'red' : 'black',
							textDecoration: el.done ? 'line-through' : 'none',
						}}
					>
						<input
							type="checkbox"
							onChange={() => handleToggleDone(el.id)}
							value={todo.done}
						/>
						<p>{el.todo}</p>
						<div>
							<button onClick={() => handleEdit(el)}>Editar</button>
							<button onClick={() => handleDelete(el)}>Excluir</button>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}

export default App;
