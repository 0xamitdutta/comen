import Image from 'next/image'
import MentorCard from '@/components/MentorCard'

interface Mentor {
    name: string;
    year: string;
    college: string;
    major: string;
    sessions: string;
    reviews: string;
    imageUrl: string;
}


export default function MentorGrid({ mentors }: { mentors: Mentor[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  w-full gap-6">
      {mentors.map((mentor) => (
        <MentorCard mentor={mentor}/>
      ))}
    </div>
  )
}