import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

interface ReviewData {
    rating: number;
    count: number;
}

interface ReviewsSectionProps {
    overallRating: number;
    reviewData: ReviewData[];
}

const ReviewSection = ({ overallRating, reviewData }: { overallRating: number, reviewData: ReviewData[] }) => {
    return (
        <Card className='w-1/3 m-4'>
            <CardHeader>
                <CardTitle>Review &amp; ratings</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center mb-4">
                    <span className="text-4xl font-bold mr-2">{overallRating.toFixed(1)}</span>
                    <div className="flex items-center">
                        {[...Array(Math.floor(overallRating))].map((_, i) => (
                            <StarIcon key={i} className="text-yellow-500 mr-1" />
                        ))}
                        {overallRating % 1 !== 0 && (
                            <StarIcon className="text-yellow-500 mr-1" />
                        )}
                        {[...Array(5 - Math.ceil(overallRating))].map((_, i) => (
                            <StarIcon key={i + 5} className="text-gray-300 mr-1" />
                        ))}
                    </div>
                </div>
                <div className="space-y-2">
                    {reviewData.map((review, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                                {[...Array(review.rating)].map((_, i) => (
                                    <StarIcon key={i} className="text-yellow-500 mr-2" />
                                ))}
                                <span>{review.rating} stars</span>
                            </div>
                            <span>{review.count}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default ReviewSection;