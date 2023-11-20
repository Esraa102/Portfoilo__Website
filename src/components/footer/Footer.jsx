import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" bg-[#120e0e]">
      <div className="container py-8 px-4 mx-auto gap-4 flex flex-col lg:flex-row justify-between">
        <Link to="/" className="text-5xl uppercase text-mainColor font-bold">
          Logo
        </Link>
        <div className="flex gap-4 lg:gap-20  flex-col lg:flex-row">
          <div className="flex flex-col gap-4">
            <p className="text-xl cursor-pointer">Resources</p>
            <Link
              to="/"
              className="pl-2 text-sm text-gray-400 hover:text-mainColor transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="pl-2 text-sm text-gray-400 hover:text-mainColor transition duration-300"
            >
              About
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl cursor-pointer">Follow Us</p>
            <a
              href="#"
              className="pl-2 text-sm text-gray-400 hover:text-mainColor transition duration-300"
            >
              Github
            </a>
            <a
              href="#"
              className="pl-2 text-sm text-gray-400 hover:text-mainColor transition duration-300"
            >
              Discourd{" "}
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xl cursor-pointer">Other Links</p>
            <a
              href="#"
              className="pl-2 text-sm text-gray-400 hover:text-mainColor transition duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="pl-2 text-sm text-gray-400 hover:text-mainColor transition duration-300"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 flex items-center gap-4 justify-between p-4 border-t-[1px] border-t-mainColor  text-sm">
        <p className="text-gray-400">2023 All Rights Reserved</p>
        <div className="flex gap-4 flex-wrap text-lg">
          <a href="#" className="hover:text-mainColor transition duration-300">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
          <a href="#" className="hover:text-mainColor transition duration-300">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a href="#" className="hover:text-mainColor transition duration-300">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a href="#" className="hover:text-mainColor transition duration-300">
            <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
