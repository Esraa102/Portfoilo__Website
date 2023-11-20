import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { home } from "../../assets/index";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="container px-4 mx-auto py-8 flex flex-col lg:flex-row gap-6 items-center justify-between">
      <img src={home} className="w-full lg:w-1/2" alt="home" />
      <div>
        <span>Hey I Am Esraa,</span>
        <h1 className="text-4xl uppercase text-mainColor my-4">
          A Front End Developer
        </h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, at
          blanditiis voluptate sunt laborum perferendis. Voluptate veniam
          reprehenderit minus, optio quia corporis, molestias est pariatur quam
          voluptas facilis explicabo iusto.
        </p>
        <button className="mainBtn">
          Download CV <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Home;
