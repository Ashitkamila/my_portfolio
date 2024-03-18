import React from "react";
import { PiFacebookLogoBold } from "react-icons/pi";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const LeftSide = () => {
  return (
    <div>
      <div className="flex flex-col items-center fixed left-0 bottom-0 px-10 sm:static">
        <div className="text-white flex flex-col sm:flex-row justify-center text-center gap-3 cursor-pointer">
         
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiAmazonsimpleemailservice className="icon" fontSize={30} />
          </a>
          <a
            href="https://www.facebook.com/yourPage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrInstagram className="icon" fontSize={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashit-kumar-kamila-b4a30b23b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialLinkedinCircular className="icon" fontSize={30} />
          </a>
          <a
            href="https://github.com/Ashitkamila"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" fontSize={30} />
          </a>
          <a
            href="https://www.facebook.com/yourPage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiFacebookLogoBold className="icon" fontSize={30} />
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#4527A0] sm:hidden"></div>
      </div>
    </div>
  );
};

export default LeftSide;
