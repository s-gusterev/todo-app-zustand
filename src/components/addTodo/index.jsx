import './AddTodo.css';
import { useTodos } from '../../store';
import { useFilter } from '../../store';
import { useState } from 'react';

const AddTodo = () => {
  const addTodo = useTodos((state) => state.addTodo);
  const [value, setValue] = useState('');
  const { filter, setFilter } = useFilter();

  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      addTodo(value);
      setValue('');
      if (filter === 'completed') {
        setFilter('all');
      }
    }
  };

  return (
    <div className='add-task'>
      <input
        className='add-task__input'
        type='text'
        name='add-task'
        placeholder='Create a new todo…'
        onKeyDown={(e) => handleAddTodo(e)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default AddTodo;
