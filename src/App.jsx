import './App.css';
import Header from './components/Header';
import AddTodo from './components/addTodo';
import { useTheme } from './store';

const App = () => {
  const theme = useTheme((state) => state.theme);

  return (
    <div className='app' id={theme}>
      <Header />
      <AddTodo />
    </div>
  );
};

export default App;
