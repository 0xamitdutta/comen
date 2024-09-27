"use client"
import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

type FilterOption = string;

type FilterOptions = {
  [key: string]: FilterOption[];
};

const filterOptions: FilterOptions = {
  Category: ['Web Development', 'Mobile Development', 'Data Science', 'Design', 'Marketing'],
  'Service options': ['One-time', 'Ongoing', 'Full-time'],
  'Seller details': ['Top Rated', 'Level One', 'Level Two'],
  Budget: ['< $100', '$100 - $500', '$500 - $1000', '> $1000'],
  'Delivery time': ['24 hours', '3 days', '7 days', '14 days', '1 month']
};

type FilterState = {
  [K in keyof typeof filterOptions]: string | null;
};

interface FilterButtonProps {
  label: string | number;
  options: FilterOption[];
  selected: string | null;
  onSelect: (value: string) => void;
  onClear: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, options, selected, onSelect, onClear }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <button 
        className="px-8 py-2 border rounded-md w-max flex items-center gap-2 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label} 
        {selected ? (
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs flex items-center">
            {selected}
            <X size={12} className="ml-1 cursor-pointer" onClick={(e) => { e.stopPropagation(); onClear(); }} />
          </span>
        ) : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => { onSelect(option); setIsOpen(false); }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterSection: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    Category: null,
    'Service options': null,
    'Seller details': null,
    Budget: null,
    'Delivery time': null
  });

  const handleSelect = (filter: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [filter]: value }));
  };

  const handleClear = (filter: keyof FilterState) => {
    setFilters(prev => ({ ...prev, [filter]: null }));
  };

  return (
    <div className="mt-4 flex flex-col gap-4 w-full">
      <div className="flex flex-wrap gap-6 place-content-evenly w-full">
        {(Object.entries(filterOptions) as [keyof FilterState, FilterOption[]][]).map(([filter, options]) => (
          <FilterButton
            key={filter}
            label={filter}
            options={options}
            selected={filters[filter]}
            onSelect={(value) => handleSelect(filter, value)}
            onClear={() => handleClear(filter)}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Pro services</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};

export default FilterSection;