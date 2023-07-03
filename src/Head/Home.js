import React, {useState} from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

function Home() {

    const [click, setClick] = useState(true);

    const handleclick = () => {
        setClick(!click);
    }



  return (
    <div>
        <div className='home_container'>
            <header>
                <div className='home_header'>
                    <img src='\images\Frame 2 1.png' alt='EG' className='head-logo-image' />
                    
                    <Link to='/Name' >
                        <button className='home-profile-view'>View Profile</button>
                    </Link >
                    <Link to='/Name' >
                        <img src='images\profile.png' alt='Photo' className='head-profile-pic' />
                    </Link>
                    {/* <Link to='/Name' > */}
                        <div className='home_guidee_guide' onClick={handleclick}>
                            <button className={click ? "guidee" : "guide"} ></button>
                        </div>
                        <div className='home_gui'>
                            <p className='home_guidee'>Guidee</p>
                            <p className='home_guide'>Guide</p>
                        </div>
                    {/* </Link> */}
                    
                </div>
            </header>
            <div className='home_chat_box'>
                <div className='home_chat_box_logocontainer'>
                    <img src='images\icons8-chat-96.png' alt='Photo' className='home_chat_box_img' />
                        <p>Chat</p>
                </div>
              
                <div className='home_chat_box_messages'>
                    <p>5</p>
                    {/* <Link> */}
                        <button className='home_chat_box_messages_button'>ongoing chats</button>
                    {/* </Link> */}
                </div>
                <div className='home_chat_box_messages'>
                    <p>2</p>
                    {/* <Link> */}
                        <button className='home_chat_box_messages_button'>new replies</button>
                    {/* </Link> */}
                </div>
                <div className='home_chat_box_messages'>
                    <p>5</p>
                    {/* <Link> */}
                        <button className='home_chat_box_messages_button'>ongoing Chats</button>
                    {/* </Link> */}
                </div>
                <div className='home_chat_box_messages'>
                    <p>1</p>
                    {/* <Link> */}
                        <button className='home_chat_box_messages_button'>new requests</button>
                    {/* </Link> */}
                </div>
            </div>
            <div className='home_main_container'>
                <div className='home_message_box'>
                    <div className='home_message_box_scroll'>
                        <div className='home_message_box_message'>
                            <div className='home_message_box_user'>
                                <p className='home_message_box_field'>Field</p>
                                <p className='home_message_box_line'></p>
                                <p className='home_message_box_username'>Name of the user</p>
                            </div>
                        </div>

                        <div className='home_message_box_message'>
                            <div className='home_message_box_user'>
                                <p className='home_message_box_field'>Field</p>
                                <p className='home_message_box_line'></p>
                                <p className='home_message_box_username'>Name of the user</p>
                            </div>
                        </div>

                        <div className='home_message_box_message'>
                            <div className='home_message_box_user'>
                                <p className='home_message_box_field'>Field</p>
                                <p className='home_message_box_line'></p>
                                <p className='home_message_box_username'>Name of the user</p>
                            </div>
                        </div>

                        <div className='home_message_box_message'>
                            <div className='home_message_box_user'>
                                <p className='home_message_box_field'>Field</p>
                                <p className='home_message_box_line'></p>
                                <p className='home_message_box_username'>Name of the user</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home_todo_box'>
                    <div className='home_todo_list'>
                        <p>Google Placement</p>
                    </div>
                    <div className='home_todo_list'>
                        <p>Google Placement</p>
                    </div>
                    <div className='home_todo_list'>
                        <p>Google Placement</p>
                    </div>
                    <div className='home_todo_list'>
                        <p>Google Placement</p>
                    </div>
                    <div className='home_todo_list'>
                        <p>Google Placement</p>
                    </div>
                    <div className='home_todo_list'>
                        <p>Google Placement</p>
                    </div>
                    <div className='home_todo_list'>
                        <p>Google Placement</p>
                    </div>
                    <div className='home_todo_list'>
                        <p>Google Placement</p>
                    </div>
                    <div className='home_todo_list'>
                        <p>Google Placement</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home