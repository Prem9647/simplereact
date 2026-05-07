import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <img style={{ width: "150px" }}  src={logo} alt="logo" />

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

    </nav>
  );
}

export default Navbar;