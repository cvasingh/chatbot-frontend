import React from 'react'
import Navbar from './Navbar'
import ChatBot from '../ChatBot/ChatBot'

export default function HomePage() {
    return (<>
        <Navbar />
        <div className='ska-bg'>
            <ChatBot />

        </div>
    </>)
}
