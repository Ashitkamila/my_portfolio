import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className="fixed bottom-5 right-5 bg-purple-500 text-white p-3 rounded-full shadow-md hover:bg-purple-800 transition duration-300 transform hover:shake"
      onClick={scrollToTop}
    >
      <FaArrowUp className="icon_shake" fontSize="18px"/>
    </button>
  );
};

export default ScrollToTopButton;
