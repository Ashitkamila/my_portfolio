import React from "react";
import { BsDownload } from "react-icons/bs";
import resume from "../../assets/resume/resume.pdf"

const Intro = () => {
  return (
    <>
      <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8">
        <h1 className="text-white text-3xl">Hello, I am</h1>
        <h1 className="text-secondary text-5xl sm:text-3xl font-semibold animated_text">
          Ashit Kumar Kamila
        </h1>
        <h1 className="text-white text-5xl sm:text-3xl font-semibold">
          I build Web and Mobile applications.
        </h1>
        <p className="text-white w-3/4 font-bold">
          I am MERN stack web and mobile developer of hands-on experience in
          building scalable and responsive web & mobile applications. Currenty I
          am working as React Developer.
        </p>
        <button className="border-2 border-tertiary text-white px-10 py-3 rounded-lg flex items-center">
          <a href={resume} download="Ashit-CV.pdf" className="flex items-center">

          DownLoad CV <BsDownload className="ml-2 icon_shake" />
          </a>
        </button>
      </div>
    </>
  );
};

export default Intro;
