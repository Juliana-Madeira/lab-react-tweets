import React from 'react'

const ProfileImage = (url) => {
  return (
    <div>
        <img src={url.image} className="profile" alt="profile"/>
    </div>
  )
}

export default ProfileImage