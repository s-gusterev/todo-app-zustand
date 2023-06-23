import './Main.css';
import Task from '../Task';
import { useTodos } from '../../store';
import { useFilter } from '../../store';

const Main = () => {
  const toogleTodo = useTodos((state) => state.toogleTodo);
  const deleteTodo = useTodos((state) => state.deleteTodo);
  const deleteCompletedTodo = useTodos((state) => state.deleteCompletedTodo);

  const { filter, setFilter } = useFilter();
  // const todos = useTodos((state) => state.todos);

  const todos = useTodos((state) => {
    switch (filter) {
      case 'completed':
        return state.todos.filter((todo) => todo.completed);
      case 'active':
        return state.todos.filter((todo) => !todo.completed);
      default:
        return state.todos;
    }
  });

  const todosActive = todos.filter((todo) => !todo.completed);

  return (
    <main className='main'>
      <div className='main__tasks'>
        {todos &&
          todos.map((todo) => (
            <Task
              key={todo.id}
              title={todo.title}
              completed={todo.completed}
              onChange={() => toogleTodo(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
          ))}

        {todos.length === 0 && filter !== 'completed' && (
          <p className='main__not-tasks'>No more tasks for today</p>
        )}
        {todos.length === 0 && filter === 'completed' && (
          <p className='main__not-tasks'>No more completed tasks </p>
        )}
      </div>

      {filter && (
        <div className='main__info'>
          <p className='main__info-active-task'>
            {todosActive.length} items left
          </p>
          <div className='main__buttons'>
            <button
              type='button'
              className='main__button'
              disabled={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              type='button'
              className='main__button'
              disabled={filter === 'active'}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button
              type='button'
              className='main__button'
              disabled={filter === 'completed'}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
          <button
            type='button'
            className='main__button main__button_clear'
            onClick={() => deleteCompletedTodo()}
          >
            Clear Completed
          </button>
        </div>
      )}
    </main>
  );
};

export default Main;
