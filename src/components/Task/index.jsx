import './Task.css';
import { Draggable } from 'react-beautiful-dnd';
const Task = ({ title, completed, draggableId, index, onChange, onDelete }) => {
  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <label
          className={`${completed ? 'task task_completed' : 'task '}`}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          {title}
          <input
            className='task__checkbox'
            type='checkbox'
            checked={completed}
            onChange={onChange}
          />
          <div className='task__icon'></div>
          <button
            className='task__delete'
            type='button'
            onClick={onDelete}
          ></button>
        </label>
      )}
    </Draggable>
  );
};

export default Task;
