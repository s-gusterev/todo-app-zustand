import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import './Main.css';

import Task from '../Task';
import { useTodos } from '../../store';
import { useFilter } from '../../store';

const Main = () => {
  const toogleTodo = useTodos((state) => state.toogleTodo);
  const deleteTodo = useTodos((state) => state.deleteTodo);
  const deleteCompletedTodo = useTodos((state) => state.deleteCompletedTodo);
  const reorderTodo = useTodos((state) => state.reorderTodo);
  const todos = useTodos((state) => state.todos);
  const { filter, setFilter } = useFilter();

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case 'completed':
        return todo.completed;
      case 'active':
        return !todo.completed;
      default:
        return true;
    }
  });

  const todosActive = useTodos((state) =>
    state.todos.filter((todo) => !todo.completed)
  );

  const todosCompleted = useTodos((state) =>
    state.todos.filter((todo) => todo.completed)
  );

  const handleDeleteCompletedTodos = () => {
    deleteCompletedTodo();
    setFilter('all');
  };

  function onDragEnd(result) {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    const srcTask = filteredTodos[sourceIndex];
    const destTask = filteredTodos[destinationIndex];

    const srcIdx = todos.findIndex((task) => task.id === srcTask.id);
    const destIdx = todos.findIndex((task) => task.id === destTask.id);
    reorderTodo(srcIdx, destIdx);
  }

  return (
    <main className='main'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='ROOT' type='group'>
          {(provided) => (
            <div
              className='main__tasks'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {filteredTodos &&
                filteredTodos.map((todo, idx) => (
                  <Task
                    index={idx}
                    draggableId={todo.id}
                    key={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                    onChange={() => toogleTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                  />
                ))}

              {filteredTodos.length === 0 &&
                filter !== 'completed' &&
                filter !== 'active' && (
                  <p className='main__not-tasks'>No more tasks for today</p>
                )}
              {filteredTodos.length === 0 && filter === 'active' && (
                <p className='main__not-tasks'>No more active tasks </p>
              )}
              {filteredTodos.length === 0 && filter === 'completed' && (
                <p className='main__not-tasks'>No more completed tasks </p>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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
          {todosCompleted.length > 0 && (
            <button
              type='button'
              className='main__button main__button_clear'
              onClick={() => handleDeleteCompletedTodos()}
            >
              Clear Completed
            </button>
          )}
        </div>
      )}
    </main>
  );
};

export default Main;
