import './Main.css';
import Task from '../Task';
import { useTodos } from '../../store';

const Main = () => {
  const todos = useTodos((state) => state.todos);
  const toogleTodo = useTodos((state) => state.toogleTodo);
  const deleteTodo = useTodos((state) => state.deleteTodo);
  const todosActive = todos.filter((todo) => !todo.completed);
  console.log(todosActive.length);
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
      </div>
    </main>
  );
};

export default Main;
