import ProfileHeader from "@/components/ProfileHeader"
import ProfileInfo from "@/components/ProfileInfo"
import ProfileProgress from "@/components/ProfileProgress"
import MentorReview from "@/components/MentorReview";
import categories from "@/constants/categories";
import reviews from "@/constants/reviews";

const MenteeProfile = () => {
    return (
        <div>
            <ProfileHeader />
            <div className="container">
                <div className="flex justify-between">
                    <ProfileInfo />
                    <ProfileProgress />
                </div>
            </div>
            <MentorReview categories={categories} reviews={reviews} isHeading={false} />
        </div>
    )
}

export default MenteeProfile