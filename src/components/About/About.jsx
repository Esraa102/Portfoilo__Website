 import {about} from '../../assets/index';

const About = () => {
  return (
    <div className="container px-4 mx-auto py-8 flex items-center gap-8 flex-col lg:flex-row">
      <img src={about} alt="laptop" className="w-full lg:w-1/2 rounded-md" />
      <div>
        <h2 className="text-4xl font-bold mb-4">
          About <span className="uppercase text-mainColor">Me</span>
        </h2>
        <p className="text-sm mb-2 text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi nemo
          itaque, eligendi optio, est a cupiditate cumque exercitationem aliquam
          debitis obcaecati aperiam eius voluptates. Sint dicta facere
          voluptates ipsam officia!
        </p>
        <p className="text-sm   text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quos
          mollitia quod.
        </p>
      </div>
    </div>
  );
};

export default About;
