import React from "react";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Node JS",
    "Express JS",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Webpack",
    "AWS",
  ];
  return (
    <div id="about">
      <SectionTitle title="About" />
      <div className="flex w-full sm:flex-col items-center">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <lottie-player
            src="https://lottie.host/9cc45946-4d07-44c7-962e-5ca901f49513/qzCPWGkTua.json"
            background="##fff"
            speed="1"
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-4 w-1/2 sm:w-full my-10">
          <p className="text-white font-bold">
            My name is Ashit, and I have worked on numerous projects as a
            front-end React JS developer for more than three years as a MERN
            engineer.
          </p>
          <p className="text-white my-5 font-bold">
            Profound background in creating mobile applications and websites
            utilizing HTML, CSS, Bootsrap, SASS, Material UI, Javascript, SEO,
            React JS, React Native, Redux, Node js, Express js, Mongo DB, Graph
            QL, Tailwind css, and Zustand.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-2xl font-bold">
          Here are few technologies, I've been working with them:
        </h1>
        <div className="flex flex-wrap gap-4 mt-5">
          {skills &&
            skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="border border-tertiary px-4 py-2 rounded"
                >
                  <h1 className="text-tertiary text-center">{skill}</h1>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default About;
