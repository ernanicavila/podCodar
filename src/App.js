import './App.css';
import React from 'react';
function App() {
	const [todo, setTodo] = React.useState();
	const [todoList, setTodoList] = React.useState([]);

	const handleSubmit = async () => {
		setTodoList([{ id: todoList.length + 1, todo }, ...todoList]);
	};

	const handleEdit = () => {};
	return (
		<div style={{ padding: 8 }}>
			<h1>Add your task...</h1>
			<section>
				<input
					value={todo}
					type="text"
					onChange={(e) => setTodo(e.target.value)}
				/>
				<button onClick={() => handleSubmit()}>Enviar</button>
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
						}}
					>
						<p>{el.todo}</p>
						<div>
							<button onClick={() => handleEdit()}>Editar</button>
							<button>Excluir</button>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}

export default App;
