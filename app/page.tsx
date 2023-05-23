'use client'

import Image from 'next/image'
import Experience from 'app/_components/experience/experience.component'
import Education from 'app/_components/education/education.component'
import Projects from 'app/_components/projects/projects.component'
import About from 'app/_components/about/about.component'
import Contact from 'app/_components/contact/contact.component'
import Main from 'app/_components/main/main.component'

export default function Home() {

    return (
        <>
            <Main/>
            <About/>
            <Experience/>
            <Education/>
            <Projects/>
            <Contact/>
        </>
    )
}