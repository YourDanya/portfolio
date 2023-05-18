'use client'

import Image from 'next/image'
import styles from './page.module.css'
import About from '@/app/_components/about/about.component'
import Experience from '@/app/_components/experience/experience.component'
import Projects from '@/app/_components/projects/projects.component'
import Contact from '@/app/_components/contact/contact.component'
import Education from '@/app/_components/education/education.component'

export default function Home() {

    return (
        <>
            <About/>
            <Experience/>
            <Education/>
            <Projects/>
            <Contact/>
        </>
    )
}