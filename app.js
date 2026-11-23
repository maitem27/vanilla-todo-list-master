const storage = 'todo';

// lance le reste seulement quand le DOM est totalement chargé (pas obligatoire si  le script est en fin de body mais je le met par précaution)
document.addEventListener('DOMContentLoaded', () => {
	const input = document.getElementById('new-todo');
	const addButton = document.getElementById('add-todo');
	const list = document.getElementById('todo-list');

	function valid_todo(todo) {
		return todo !== null && typeof todo.text === 'string' && typeof todo.done === 'boolean';
	}
	function load_todo() {
		try {
			const saved = JSON.parse(localStorage.getItem(storage));
			if (Array.isArray(saved)) {
					return saved.filter(valid_todo);
			}
		} catch {
			// empeche l'erreur et permet le return [] j'aurais pu mettre un return[] au lieu du commentaire mais le cela serait juste le dupliquer parce que le return du bas reste (pour les données illisibles, le JSON pas valide)
		}
		return [];
	}

	let todos = load_todo();

	function save_todo() {
		localStorage.setItem(storage, JSON.stringify(todos));
	}

	function create_button(class_name, label, on_click) {
		const button = document.createElement('button');
		button.className = class_name;
		button.textContent = label;
		button.addEventListener('click', on_click);
		return button;
	}

	function display_todo() {
		list.textContent = '';
		todos.forEach((todo, index) => {
			list.append(create_todo_item(todo, index));
		});
	}

	function toggle_todo(index) {
		todos[index].done = !todos[index].done;
		save_todo();
		display_todo();
	}

	function delete_todo(index) {
		todos.splice(index, 1);
		save_todo();
		display_todo();
	}


	function create_todo_item(todo, index) {
		const item = document.createElement('li');
		item.className = 'todo-item';
		if (todo.done) {
			item.classList.add('done');
		}

		const label = document.createElement('span');
		label.textContent = todo.text;

		const check_label = todo.done ? 'À faire' : 'Terminée';
		const check_button = create_button('action-check', check_label, () => toggle_todo(index));
		const delete_button = create_button('action-delete', 'Supprimer', () => delete_todo(index));

		const actions = document.createElement('div');
		actions.className = 'todo-actions';
		actions.append(check_button, delete_button);

		item.append(label, actions);
		return item;
	}

	function add_todo() {
		const text = input.value.trim();
		if (text === '') {
			return;
		}

		todos.push({ text: text, done: false });
		input.value = '';
		save_todo();
		display_todo();
	}

	addButton.addEventListener('click', add_todo);
	input.addEventListener('keydown', (event) => {
		if (event.key === 'Enter') {
			add_todo();
		}
	});

	display_todo();
});