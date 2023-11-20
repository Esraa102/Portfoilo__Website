import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
// eslint-disable-next-line react/prop-types
const Navbar = ({ className }) => {
  return (
    <ul className={className}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainColor" : "text-white"
            } hover:text-mainColor transition duration-300`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainColor" : "text-white"
            } hover:text-mainColor transition duration-300`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainColor" : "text-white"
            } hover:text-mainColor transition duration-300`
          }
        >
          Contact Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/github"
          className={({ isActive }) =>
            `${
              isActive ? "text-mainColor" : "text-white"
            } hover:text-mainColor transition duration-300`
          }
        >
          MyGithub
        </NavLink>
      </li>
      {className === "mobile-nav" && (
        <li>
          <Link to="/" className="hover:text-mainColor transition duration-300">
            Log In
          </Link>
          <Link
            to="/"
            className=" block mt-4  hover:text-mainColor transition duration-300"
          >
            Register
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Navbar;
