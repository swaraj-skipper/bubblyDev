import React from 'react'

export default function Profile() {
  return (
    <>

    <div className='cont'>
        <div className="bio">
            <img src="https://www.filmibeat.com/img/2012/12/14-shahrukh-khan-141212.jpg" alt="img" className='profile-img' />
            <b>Username</b>
            <p>Name Surname</p>
            <button className='login-btn'>Follow</button>

            <div className="reach">
                <div className="reach-comp">
                    <b>420</b>
                    <i className="sm">Posts</i>
                </div>
                <div className="reach-comp">
                    <b>69</b>
                    <i className="sm">Followers</i>
                </div>
                <div className="reach-comp">
                    <b>96k</b>
                    <i className="sm">Likes</i>
                </div>
            </div>

        </div>
        <div className="photo-content">
            <div className="cover">
                <img src="https://wallpapers.com/images/hd/shah-rukh-khan-cool-pose-oyn00f93n92kdwwe-oyn00f93n92kdwwe.jpg" alt="img" className='cover-img'/>
            </div>
            <div className="photo-uploads">
                <img src="https://i.pinimg.com/originals/26/fa/d6/26fad6d82824a19e29c5c3dc8ee8306f.jpg" alt="img" className='uploads'/>
                <img src="https://filmfare.wwmindia.com/content/2020/jul/shahrukhkhan41595146503.jpg" alt="img" className='uploads'/>
                <img src="https://i.pinimg.com/originals/26/fa/d6/26fad6d82824a19e29c5c3dc8ee8306f.jpg" alt="img" className='uploads'/>

            </div>
        </div>
    

    </div>
    </>
  )
}
