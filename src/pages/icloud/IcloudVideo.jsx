import React from 'react'
import video from '../../assets/videos/icloud.mp4'
import {DefaultPlayer as Video} from 'react-html5video'

function IcloudVideo() {
  return (
    <div className='index-video'>
        <Video autoPlay loop controls muted>
            <source src={video} type='video/mp4'/>
        </Video>
    </div>
  )
}

export default IcloudVideo