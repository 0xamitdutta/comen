import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { GraduationCap, MessageSquare } from "lucide-react";

interface Mentor {
    name: string;
    year: string;
    college: string;
    major: string;
    sessions: string;
    reviews: string;
    imageUrl: string;
}


const MentorCard = ({ mentor }: { mentor: Mentor }) => (
    <Card className="shadow-lg">
        <CardHeader className="p-0">
            <img src={mentor.imageUrl} alt={mentor.name} className="w-full h-80 object-cover rounded-t-lg" />
        </CardHeader>
        <CardContent className="p-4 mt-4">
            <CardTitle className="text-lg font-semibold mb-2">{mentor.name}</CardTitle>
            <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span>{`${mentor.year}, ${mentor.college}`}</span>
                </div>
                <div>{mentor.major}</div>
                <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>{`${mentor.sessions} (${mentor.reviews})`}</span>
                </div>
            </div>
        </CardContent>
    </Card>
);

export default MentorCard;