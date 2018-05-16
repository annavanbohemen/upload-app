import React, {Component} from 'react'
import '../../css/top.css'

class Top extends Component {
    render() {
        return (
          <div className='top-nav'>
            <img src="../../../icons/profile.svg" alt="profile-icon" className='profile'></img>
            <img src="../../../icons/logo.svg" alt="logo"></img>
            <img src="../../../icons/chat.svg" alt="logo" className='chat'></img>
          </div>
        )
    }
}

export default Top