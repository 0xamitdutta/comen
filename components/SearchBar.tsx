"use client"

import { useState } from 'react'
import universities from '@/data/universities.json';
import { Combobox } from "@/components/ui/combobox";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Hello see this : ",searchTerm)
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      {/* <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search College/Course"
        className="w-1/2 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      /> */}
      <Combobox 
                                options={universities.map(uni => ({
                                    value: uni.name,
                                    label: `${uni.name} (${uni.country})`
                                }))}
                                value={searchTerm}
                                onChange={setSearchTerm}
                                placeholder="Select College"
                            />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  )
}