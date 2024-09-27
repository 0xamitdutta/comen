// ResultsInfo.tsx
import React from 'react'
import { ChevronDown } from 'lucide-react'

export default function ResultsInfo() {
  return (
    <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
      <span>45,000+ results</span>
      <div className="flex items-center gap-2">
        <span>Sort by:</span>
        <button className="font-medium text-gray-900 flex items-center gap-1">
          Relevance <ChevronDown size={16} />
        </button>
      </div>
    </div>
  )
}