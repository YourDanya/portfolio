import Link from 'next/link'
import {skills} from 'app/_components/about/about.content'
import about from 'app/_common/svg/about-bg.svg'
import Button from 'app/_common/components/button/button.component'
import useResize from 'app/_common/hooks/resize/resize.hook'
import {useState} from 'react'
import {useRef} from 'react'
import bg from 'app/_common/svg/about-bg.svg'

const About = () => {
    const elemRef = useRef<HTMLDivElement | null>(null)
    return (
        <div className={'about'}>
            <div className={'container  about__container'}>
                <div className={'about__descr'} ref={elemRef}>
                    <div className={'about__details-title'}>
                        Get to know me!
                    </div>
                    <div className={'about__descr-text'}>
                        <div className={'about__descr-par'}>
                            {'I\'m currently a '}
                            <div className={'about__descr-bold'}>
                                Full Stack Developer
                            </div>
                            {' with over one year of commercial experience. working in UNAMOUR. My Stack is React, Next, Express, Mongo. Check out some of my work in the Projects section.'}
                        </div>
                        <div className={'about__descr-par'}>
                            {'I also like sharing content related to the stuff that I have learned over the years in '}
                            <div className={'about__descr-bold'}>
                                Web Development
                            </div>
                            {' so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Github where I post useful content related to Web Development and Programming.'}
                        </div>
                        <div className={'about__descr-par'}>
                            {'I\'m open to '}
                            <div className={'about__descr-bold'}>
                                Job
                            </div>
                            {' opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don\'t hesitate to '}
                            <div className={'about__descr-bold'}>
                                contact
                            </div>
                            {' me.'}
                        </div>
                    </div>
                    <Link href={'/'} className={'about__contact'}>
                        Contact
                    </Link>
                </div>
                <div className={'about__skills'}>
                    <div className={'about__details-title'}>
                        My Skills
                    </div>
                    <div className={'about__skills-items'}>
                        {skills.map((elem, index) => (
                            <div key={elem} className={`about__skills-item`}>
                                {elem}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About