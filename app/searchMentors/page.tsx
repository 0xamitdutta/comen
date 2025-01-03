// import React from 'react'
// import SearchBar from '@/components/SearchBar'
// import FilterSection from '@/components/FilterSection'
// import ResultsInfo from '@/components/ResultsInfo'
// import MentorGrid from '@/components/MentorGrid'
// import mentors from "@/constants/mentors";

// export default function SearchMentorPage() {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Mentors</h1>
//       <SearchBar />
//       <FilterSection />
//       <ResultsInfo />
//       <div className="flex flex-col md:flex-row gap-6 mt-4">
//         <main className="w-full">
//           <MentorGrid mentors={mentors}/>
//         </main>
//       </div>
//     </div>
//   )
// }
'use client';
import React, { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import SearchBar from '@/components/SearchBar';
import FilterSection from '@/components/FilterSection';
import ResultsInfo from '@/components/ResultsInfo';
import MentorGrid from '@/components/MentorGrid';

// Firestore User Type
interface Mentor {
  name: string;
  year: string;
  college: string;
  major: string;
  sessions: string;
  reviews: string;
  imageUrl: string;
}

export default function SearchMentorPage() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMentors = async (searchQuery?: string) => {
    try {
      setLoading(true);
      const db = getFirestore();
      
      // Base query for mentors
      let mentorsQuery = query(
        collection(db, 'users'),
        where('userType', '==', 'mentor')
      );

      // If search term is provided, add search conditions
      if (searchQuery) {
        // Convert search term to lowercase for case-insensitive search
        const searchLower = searchQuery
        //.toLowerCase();
        
        // Create a query that matches college names containing the search term
        mentorsQuery = query(
          collection(db, 'users'),
          where('userType', '==', 'mentor'),
          where('collegeName', '>=', searchLower),
          where('collegeName', '<=', searchLower + '\uf8ff')
        );
      }

      const querySnapshot = await getDocs(mentorsQuery);

      const mentorsData = querySnapshot.docs.map(doc => ({
        name: `${doc.data().firstName} ${doc.data().lastName}`,
        year: doc.data().currentYear,
        college: doc.data().collegeName,
        major: doc.data().degree,
        sessions: doc.data().sessions,
        reviews: doc.data().rating,
        imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=3115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      })) as Mentor[];

      setMentors(mentorsData);
    } catch (error) {
      console.error('Error fetching mentors:', error);
      setMentors([]);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch when component mounts
  useEffect(() => {
    fetchMentors();
  }, []);

  // Fetch mentors when search term changes
  useEffect(() => {
    if (searchTerm) {
      console.log("mentor searching triggered: ",searchTerm)
      fetchMentors(searchTerm);
    } else {
      fetchMentors(); // Fetch all mentors if search term is empty
    }
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    setSearchTerm(String(term));
    console.log("the search term has been set : ",searchTerm);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Mentors</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterSection />
      <ResultsInfo resultsCount={mentors.length} />
      <div className="flex flex-col md:flex-row gap-6 mt-4">
        <main className="w-full">
          {loading ? (
            <p>Loading mentors...</p>
          ) : mentors.length > 0 ? (
            <MentorGrid mentors={mentors} />
          ) : (
            <p>No mentors found.</p>
          )}
        </main>
      </div>
    </div>
  );
}
