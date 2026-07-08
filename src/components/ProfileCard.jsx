import { useState, useEffect } from "react"

function ProfileCard() {
    const [profileData, setProfileData] = useState(null)
    const [loadingFlag, setLoadingFlag] = useState(true)

    useEffect(() => {

        const timer = setTimeout(() => {
            setProfileData({
                name: "Ada Lovelace",
                email: "ada@example.com",
                city: "London"
            })

            setLoadingFlag(false)

            
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="profile-card-container">
            <div className="card">

                {loadingFlag ? "Loading" : 
                <div className="profile-card">
                    <p>{profileData.name}</p>
                    <p>{profileData.email}</p>
                    <p>{profileData.city}</p>
                </div>
                }   
            </div>
            
        </div>
    )
}

export default ProfileCard