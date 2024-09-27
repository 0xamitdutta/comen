import React from 'react'
import SearchBar from '@/components/SearchBar'
import FilterSection from '@/components/FilterSection'
import ResultsInfo from '@/components/ResultsInfo'
import MentorGrid from '@/components/MentorGrid'
import mentors from "@/constants/mentors";

export default function SearchMentorPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Mentors</h1>
      <SearchBar />
      <FilterSection />
      <ResultsInfo />
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <main className="w-full">
          <MentorGrid mentors={mentors}/>
        </main>
      </div>
    </div>
  )
}
