import './App.css';
import Header from './components/Header';
import AddTodo from './components/addTodo';
import Main from './components/Main';
import { useTheme } from './store';

const App = () => {
  const theme = useTheme((state) => state.theme);

  return (
    <div className='app' id={theme}>
      <Header />
      <AddTodo />
      <Main />
    </div>
  );
};

export default App;
