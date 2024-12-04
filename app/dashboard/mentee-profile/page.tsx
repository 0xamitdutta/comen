import MentorShowcase from "@/components/MentorShowCase"
import ProfileHeader from "@/components/ProfileHeader"
import ProfileInfo from "@/components/ProfileInfo"
import ProfileProgress from "@/components/ProfileProgress"
import mentors from "@/constants/mentors";

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
            <MentorShowcase mentors={mentors} />
        </div>
    )
}

export default MenteeProfile