import NavEl from "../NavEl/NavEl";
import "./Navbar.scss";

const Navbar = () => {
  const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];
  return (
    <nav>
      <h1>W.</h1>
      <ul className="nav__links">
        {navLinks.map((link, index) => (
          <NavEl key={index} link={link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
