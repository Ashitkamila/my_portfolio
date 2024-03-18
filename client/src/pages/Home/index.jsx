import React from "react";
import Header from "../../components/header";
import Intro from "./intro";
import About from "../About/about";
import Experiences from "../Experiences/experiences";
import Projects from "../../Projects/projects";
import Contact from "../contact";
import Courses from "../courses";
import Footer from "../../components/footer";
import LeftSide from "../../components/leftSide";
import TopScrollBtn from "../../components/topScrollBtn";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <About/>
        <Experiences/>
        <Projects/>
        <Courses/>
        <Contact/>
        <Footer/>
        <LeftSide/>
        <TopScrollBtn/>
      </div>
    </>
  );
};

export default Home;
