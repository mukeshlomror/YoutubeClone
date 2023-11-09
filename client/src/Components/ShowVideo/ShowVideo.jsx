import React from 'react'
import {Link} from 'react-router-dom'
import './ShowVideo.css'
import moment from 'moment'

function ShowVideo({vid}) {
  return (
    <>
       <Link to={`/videopage/${vid?._id}`}> 
       <video 
        src={`http://localhost:8080/${vid?.video_src}`}
        className="video_ShowVideo"
        />

      </Link>  

       <div className='video_description'>
        <div className='Chanel_logo_App'>
            <div className='fstChar_logo_App'>
                <>{vid?.Uploder?.charAt(0).toUpperCase()}</>
            </div>
        </div>
        <div className='video_details'>
            <p className='title_vid_ShowVideo'>{vid?.videoTitle}</p>
            <pre className='vid_views_UploadTime'>{vid?.Uploder}</pre>
            <pre className='vid_views_UploadTime'>
                {vid?.Views} views <div className="dot"></div> {moment(vid?.createdAt).fromNow()}
            </pre>

        </div>
     </div>

    </>
  )
}

export default ShowVideo