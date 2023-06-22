import './Header.css';
import { useTheme } from '../../store';

const Header = () => {
  const toogleTheme = useTheme((state) => state.toogleTheme);
  return (
    <header className='header'>
      <h1 className='header__title'>Todo</h1>
      <button
        className='header__button'
        type='button'
        onClick={toogleTheme}
      ></button>
    </header>
  );
};

export default Header;
