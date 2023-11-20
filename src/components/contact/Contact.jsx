import { useParams } from "react-router-dom";
import { contact } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const { userId } = useParams();
  return (
    <div className="container mx-auto py-8 px-4 flex gap-4 flex-col lg:flex-row items-center justify-between">
      <img src={contact} className="w-full lg:w-1/2" alt="contact" />
      <div>
        <h2 className="text-3xl uppercase text-mainColor font-bold mb-6">
          Contact Info
        </h2>
        <p className="text-sm text-gray-400 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          dolores delectus aliquid beatae pariatur fugiat veniam quaerat
          excepturi laborum inventore, consequatur deserunt, architecto adipisci
          ea assumenda autem suscipit nostrum quidem!
        </p>
        <p className="mb-4" id={userId}>
          Email:{" "}
          <a href="mailto:manalellba9@gmail.com" className="text-mainColor">
            manalellba9@gmail.com
          </a>
        </p>
        <p className="mb-4">
          Phone Number:{" "}
          <a href="tel:01000148332" className="text-mainColor">
            +201000148332
          </a>
        </p>
        <p className="mb-4">
          Personal Website:{" "}
          <a href="#" className="text-mainColor">
            https://esraabusiness.com
          </a>
        </p>
        <button className="mainBtn">
          Hire Me <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Contact;
