# Redux Todo List

This is a Todo List built with React and Redux. It also uses local storage to persist the todo list. 

The default app has only the bar bones features: 

- creates todos
- removes todos
- saves todos

Your challenge is to some add new features. At the moment the app can add and remove todos. 

Take a quick look at the code and see what's there. 

- App 
	- NewTodo - Displays a simple form to add todos
	- ListTodos - Creates a list of todos
		- Todo - Displays a todo and a remove button (x)

The code here uses Hooks. 

- useState - react
- useSelector - react-redux
- useDispatch - react-redux 

## Challenges: 

### Complete a todo

Todos are defined in `TodoItem.js` by the `TodoItem` class. Each TodoItem has the following properties: 

- name - A string 
- completed - A boolean
- date - A Date

Currently the x button removes a todo. Your job is to add another button that marks a todo as completed. 

You'll need to do the following: 

- `actions.js`
	- create a new action - `COMPLETE_TODO`
	- add an action creatot function - `completeTodo`
		- This function should recieve the index of the todo item as a parameter, and include it in the payload!
- `todosReducer.js`
	- import the new `COMPLETE_TODO` action
	- create a new case in the switch block to handle this action
		- You'll need use the index to find the todo in the list and change it's completed property. 
		- You'll also need to make a new array of todos, map would be a good choice here! 
- `Todo.js`
	- Import your `completeTodo` action creator
	- Add a new button to toggle the todo state
		- Add an `onClick` handler that uses the dispatcher and your `completeTodo` action creator. 

### Display the Date

Todos are displayed by the `Todo` Component defined in `Todo.js`. Add another element here to display the date. 

Use [`Date.toLocaleDateString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) to convert the date object to a more readble string. 

### Sort and filter todos

The todo list is looking pretty good but it could better! There are two challenges here: 

- sort todos on the completed, date, or name
- filter todos to show: alll todos, completed todos, or not completed todos