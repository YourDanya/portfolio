import {skills} from '@/app/_components/about/about.content'
import Link from 'next/link'

const About = () => {
    return (
        <div className={'about'}>
            <div className={'about__title'}>
                {'HI, I\'m Danyl Tarasenko'}
            </div>
            <div className={'about__short'}>
                A Full Stack Developer with 2 years experience in building the web apps.
            </div>
            <div className={'about__details'}>
                <div className={'about__long'}>
                    <div className={'about__long-title'}>
                        Get to know me!
                    </div>
                    <div className={'about__long-text'}>
                        I'm currently a full stack developer working in unamour.com.ua with over one year of commercial experience. My Stack is React, Next, Express, Mongo.

                        I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
                    </div>
                </div>
                <div className={'about__skills'}>
                    <div className={'about__skills-title'}>
                        My Skills
                    </div>
                    <div className={'about__skills-items'}>
                        {skills.map(elem => (
                            <div className={'about__skills-item'}>
                                {elem}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Link href={'/'} className={'about__contact'}>
                Contact
            </Link>
        </div>
    )
}

export default About