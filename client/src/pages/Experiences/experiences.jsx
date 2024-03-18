import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experience } from "../../resources/experience";

const Experiences = () => {
  const [selectedItemsIndex, setSelectedItemsIndex] = useState(0);
  return (
    <div id="experiences">
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-10 sm:flex-col">
        <div className="flex-col gap-10 border-l-2 border-[#484a49] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experience?.map((exp, indx) => {
            return (
              <div className=" cursor-pointer" onClick={()=>setSelectedItemsIndex(indx)} key={indx}>
                <h1
                  className={`text-xl px-5 py-2 ${
                    selectedItemsIndex === indx ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#0f3e3a] py-3 font-semibold w-1/1"  : "text-white"
                  } `}
                >
                  {exp.period}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-2xl">{experience[selectedItemsIndex].title}</h1>
            <h1 className="text-tertiary text-2xl">{experience[selectedItemsIndex].company}</h1>
            <p className="text-white">{experience[selectedItemsIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
