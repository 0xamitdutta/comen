import ProfileHeader from "@/components/ProfileHeader"
import ProfileInfo from "@/components/ProfileInfo"
import ProfileProgress from "@/components/ProfileProgress"

const Profile = () => {
    return (
        <div>
            <ProfileHeader />
            <div className="container">
                <div className="flex justify-between">
                    <ProfileInfo />
                    <ProfileProgress />
                </div>
            </div>
        </div>
    )
}

export default Profile