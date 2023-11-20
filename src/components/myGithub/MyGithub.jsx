import { projects, vid } from "../../assets/index";
import { useLoaderData } from "react-router-dom";
const MyGithub = () => {
  const data = useLoaderData();
  return (
    <div className="relative  min-h-screen z-0">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full -z-[2] object-cover"
      >
        <source src={vid} />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000d1] -z-[1]" />
      <div className="container py-8 mx-auto px-4">
        <div className="text-center">
          <h2 className="text-mainColor mb-4 uppercase font-bold text-3xl">
            {data.name}
          </h2>
          <img
            src={data["avatar_url"]}
            className="mx-auto mb-4 w-[200px] rounded-full"
            alt="profile"
          />
          <p className="mb-4 text-lg">
            Bio: <span className="text-mainColor">{data.bio}</span>
          </p>
          <p>
            Follow Me On:{" "}
            <a
              href={data["html_url"]}
              className=" underline hover:text-mainColor"
            >
              Github
            </a>
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-center text-2xl text-mainColor font-semibold">
            &lt;// My Projects &gt;
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 ">
            {projects.map((item, id) => (
              <div
                key={id}
                className="rounded-md overflow-hidden bg-black cursor-pointer hover:scale-110 ease-in-out duration-300"
              >
                <img src={item.img} alt="project" />
                <p className="p-2 text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGithub;
