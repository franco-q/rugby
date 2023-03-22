import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 rounded-box">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/events">Eventos</Link>
          </li>
          <li>
            <Link to="/matches">Partidos</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
