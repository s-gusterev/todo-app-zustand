import './Task.css';
const Task = ({ title, completed, onChange, onDelete }) => {
  return (
    <label className={`${completed ? 'task task_completed' : 'task '}`}>
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
  );
};

export default Task;
