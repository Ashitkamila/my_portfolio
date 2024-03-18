import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { course } from '../resources/course';

const Courses = () => {
    const [selectedItemsIndex, setSelectedItemsIndex] = useState(0);
  return (
    <div id="course">
    <SectionTitle title="Courses" />
    <div className="flex py-10 gap-10 sm:flex-col">
      <div className="flex-col gap-10 border-l-2 border-[#484a49] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
        {course?.map((exp, indx) => {
          return (
            <div
              className=" cursor-pointer"
              onClick={() => setSelectedItemsIndex(indx)}
              key={indx}
            >
              <h1
                className={`text-xl px-5 py-2 ${
                  selectedItemsIndex === indx
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#0f3e3a] py-3 font-semibold w-1/1"
                    : "text-white"
                } `}
              >
                {exp.title}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center gap-10">
       
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {course[selectedItemsIndex].title}
          </h1>
          <h1 className="text-tertiary text-2xl">
            {course[selectedItemsIndex].description}
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            porro natus commodi quas harum fuga quibusdam temporibus, neque
            facilis incidunt?
          </p>
        </div>
        <img src={course[selectedItemsIndex].image} alt="image" className="h-40 w-75" />
      </div>
    </div>
  </div>
  )
}

export default Courses
