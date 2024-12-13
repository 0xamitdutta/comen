"use client"

import React, { useState, useMemo, useRef, useEffect } from 'react';

interface ComboboxProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const Combobox: React.FC<ComboboxProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option"
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const comboboxRef = useRef<HTMLDivElement>(null);

  // Filter options based on search term
  const filteredOptions = useMemo(() => {
    return options.filter(option => 
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 10); // Limit to 10 results
  }, [options, searchTerm]);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue);
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={comboboxRef}>
      <div className="relative">
        <input
          type="text"
          value={value || searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
            onChange(''); // Clear selected value when typing
          }}
          onClick={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Dropdown arrow */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredOptions.length === 0 ? (
            <li className="px-3 py-2 text-gray-500">No options found</li>
          ) : (
            filteredOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer 
                           transition-colors duration-200 
                           text-sm flex justify-between items-center"
              >
                <span>{option.label}</span>
                {value === option.value && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-green-500" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                )}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};