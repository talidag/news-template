import "./NavEl.scss";

const NavEl = ({ link }) => {
  return (
    <li>
      <a className="nav__link" href="$">
        {link}
      </a>
    </li>
  );
};

export default NavEl;
