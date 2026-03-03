import logo from '../icons_assets/Logo.svg';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <div className="header-content">
        <a href="/" aria-label="Little Lemon home">
          <img src={logo} alt="Little Lemon logo" />
        </a>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
