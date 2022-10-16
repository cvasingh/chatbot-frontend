import React from 'react'
import Navbar from './Navbar'
import Resume from '../assets/Resume.pdf'

export default function About() {
    return (<>
        <Navbar />
        <div className='ska-bg'>
            <embed src={Resume} width="100%" height="900px" />
        </div>
    </>)
}
