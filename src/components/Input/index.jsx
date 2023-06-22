import './Input.css';
const Input = () => {
  return (
    <div className='add-task'>
      <input
        className='add-task__input'
        type='text'
        name='add-task'
        placeholder='Create a new todo…'
      />
    </div>
  );
};

export default Input;
