import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h1>MarkShop</h1>
      </div>
      <div className="navbar__right">
        <div className="navbar__categories">
          <span className="category">Hombre</span>
          <span className="category">Mujer</span>
          <span className="category">Infantil</span>
        </div>
        <div className="navbar__menu">
          <CartWidget></CartWidget>
        </div>
      </div>
    </nav>
  );
}

export default NavBar