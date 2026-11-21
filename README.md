# Javascript basics through a todo list

## Play rules

- The goal is to respond to the specifications by developing the expected features.
- The HTML and the CSS are provided and should not be modified: the work focuses on the JavaScript, all CSS classes are ready to be used. Exceptions can be allowed if necessary, in this case you must be able to explain why you modified the HTML / CSS code.
- Each application is reviewed based on the following criteria:
  - Features: every mandatory feature works (add, mark as done / to do, delete, tasks kept after a reload).
  - Robustness: no error in the console, an empty task cannot be added.
  - Code quality: clear names, short functions, no dead code, useful comments, `npm run check` passes.
  - Use of the provided design: the provided classes are set by the JavaScript, without modifying the HTML or the CSS.
  - A strong defense of the final result.

## Specifications

### Technical

- One single HTML as `index.html` (provided)
- One single vanilla CSS as `styles.css` (provided)
- One single vanilla JS as `app.js`
- Linting and formatting with [Biome](https://biomejs.dev): run `npm install` once, then
  - `npm run check` to check formatting and linting
  - `npm run lint` to run the linter only
  - `npm run format` to format the files

### Hooks between the JavaScript and the provided HTML / CSS

The provided CSS only styles the list if the JavaScript uses these names.

#### Provided in the HTML

- `#new-todo`: the text field where the user types a new task.
- `#add-todo`: the "Ajouter" button.
- `#todo-list`: the list (`<ul>`), where the tasks must be created.

#### To set from the JavaScript

- Each task: a `<li>` element with the `todo-item` class, added to `#todo-list`.
- The label of the task: a `<span>` inside the `todo-item`.
- The buttons of the task: grouped in a `<div>` with the `todo-actions` class.
  - The "Terminée" button, with the `action-check` class.
  - The "Supprimer" button, with the `action-delete` class.
- `done` on a `todo-item`: the task is done (the label is struck through).

### Functional

#### Add a task

- The user types a task in the text field, then clicks "Ajouter" or presses the Enter key.
- The spaces around the text are removed, and an empty task is not added.
- The text field is emptied once the task is added.

#### Mark a task as done

- The "Terminée" button marks the task as done: the `done` class is set and the button text becomes "À faire".
- The "À faire" button marks the task as to do again: the `done` class is removed and the button text becomes "Terminée".

#### Delete a task

- The "Supprimer" button removes the task from the list.

#### Keep the tasks

- The tasks are saved in the local storage after each change (add, done / to do, delete).
- When the page is loaded, the saved tasks are displayed again, with their status.
- If the local storage contains invalid data, the application starts with an empty list instead of crashing.

## Deliverables

- A GitHub repository with the code of the application.
- Deploy your application on [Vercel](https://vercel.com), [Render](https://render.com) or [Railway](https://railway.com). Or [GitHub Pages](https://pages.github.com) if you prefer.
