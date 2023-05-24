import Button from 'app/_common/components/button/button.component'
import Link from 'next/link'

const Main = () => {

    return (
        <div className={'main'}>
            <div className={'main__title'}>
                {'HI, I\'m Danyl Tarasenko'}
            </div>
            <div className={'main__descr'}>
                {'A Full Stack Developer with 2 years experience in building the web apps. My main stack is React, Next, Express, Mongoose'}
            </div>
            <div className={'main__button-wrapper'}>
                <a className={'main__button'} href={'#projects'}>
                    Projects
                </a>
            </div>
        </div>
    )
}

export default Main