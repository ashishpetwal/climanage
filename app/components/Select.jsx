'use client'
import React, { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Select = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none p-2.5"
          onClick={toggleDropdown}
        >
          {selectedOption || 'Select'}
          {isOpen ?<IoMdArrowDropup className="-mr-1 ml-2 h-5 w-5" />:<IoMdArrowDropdown className="-mr-1 ml-2 h-5 w-5" />}
        </button>
      </div>
      {isOpen && (
        <div className="z-10 origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <button
                key={option}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;