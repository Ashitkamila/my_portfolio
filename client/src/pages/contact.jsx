import React from "react";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  const userDetails = {
    name: "Ashit Kumar Kamila",
    age: null,
    gender: "Male",
    email: "kamilashit@gmail.com",
    mobile: "+91-8327786697",
    currentLocation: "Bangalore",
    country: "India",
  };
  return (
    <div id="contact">
      <SectionTitle title="Contact" />
      <div className="flex m-1 sm:flex-col items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary font-extrabold">{"{"}</h1>
          {Object.keys(userDetails).map((key) => {
            console.log("test", userDetails[key]);
            return (
              <h1 key={key} className="font-semibold ml-5 text-sm">
                <span className="text-tertiary text-sm">{key}&nbsp;:</span>{" "}
                &nbsp;
                <span className="text-tertiary text-sm">
                  {userDetails[key]}
                </span>
              </h1>
            );
          })}
          <h1 className="text-tertiary font-extrabold">{"}"}</h1>
        </div>
        <div className="h-[400px]">
        <lottie-player
          src="https://lottie.host/51dcb348-cb4c-40b7-bd74-0ef8213e8677/i8QKGgRnq8.json"
          background="##FFFFFF"
          speed="1"
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
      </div>
      </div>
   
    </div>
  );
};

export default Contact;
