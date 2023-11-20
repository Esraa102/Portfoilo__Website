import { Link } from "react-router-dom";
import { Navbar } from "../../components/index";
import "./header.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="sticky top-0 z-10 bg-[#000000d1]">
      <div className="header">
        <Link to="/" className="font-bold uppercase text-mainColor">
          logo
        </Link>
        <Navbar className={"largeNav"} />
        <div className="hidden lg:flex gap-2 items-center font-semibold text-sm">
          <Link to="/">Log In</Link>
          <Link to="/" className="py-1 px-4 bg-mainColor rounded-md">
            Register
          </Link>
        </div>
        <div className="block lg:hidden">
          {show ? (
            <div>
              <span
                className="cursor-pointer text-mainColor text-lg"
                onClick={() => setShow(false)}
              >
                <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
              </span>
              <Navbar className="mobile-nav" />
            </div>
          ) : (
            <span
              className="cursor-pointer text-mainColor text-lg"
              onClick={() => setShow(true)}
            >
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
