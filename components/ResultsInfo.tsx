import React from 'react'
import { ChevronDown } from 'lucide-react'

interface ResultsInfoProps {
  resultsCount?: number;
  onSortChange?: (sortType: string) => void;
}

export default function ResultsInfo({ 
  resultsCount = 0, 
  onSortChange 
}: ResultsInfoProps) {
  const [sortOption, setSortOption] = React.useState('Relevance');

  const sortOptions = [
    'Relevance', 
    'Most Sessions', 
    'Highest Rated', 
    'Newest'
  ];

  const handleSortChange = (option: string) => {
    setSortOption(option);
    onSortChange?.(option);
  };

  return (
    <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
      <span>
        {resultsCount === 0 
          ? 'No results' 
          : `${resultsCount} mentor${resultsCount !== 1 ? 's' : ''} found`
        }
      </span>
      <div className="flex items-center gap-2 relative group">
        <span>Sort by:</span>
        <div className="relative">
          <button className="font-medium text-gray-900 flex items-center gap-1">
            {sortOption} <ChevronDown size={16} />
          </button>
          <ul className="hidden group-hover:block absolute right-0 top-full mt-1 w-40 bg-white border rounded-md shadow-lg z-10">
            {sortOptions.map((option) => (
              <li 
                key={option}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                  sortOption === option ? 'bg-gray-100' : ''
                }`}
                onClick={() => handleSortChange(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}