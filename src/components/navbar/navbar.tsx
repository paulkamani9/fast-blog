import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Fast Blog</h2>
      <div className="navbar-items">
        <a>About</a>
        <a>Contact</a>
      </div>
    </nav>
  );
};
export default Navbar;
