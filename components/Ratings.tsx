import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon } from 'lucide-react';

const Ratings = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Review &amp; ratings</CardTitle>
                    <a href="/reviews" className="text-sm text-blue-500">
                        View all
                    </a>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center mb-4">
                        <span className="text-4xl font-bold mr-2">4.5</span>
                        <div className="flex items-center">
                            <StarIcon className="text-yellow-500 mr-1" />
                            <StarIcon className="text-yellow-500 mr-1" />
                            <StarIcon className="text-yellow-500 mr-1" />
                            <StarIcon className="text-yellow-500 mr-1" />
                            <StarIcon className="text-gray-300 mr-1" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <StarIcon className="text-yellow-500 mr-2" />
                                <span>5 stars</span>
                            </div>
                            <span>25</span>
                        </div>
                        {/* Add more rating breakdowns */}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Ratings