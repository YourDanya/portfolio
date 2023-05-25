import Link from 'next/link'
import Github from 'app/_common/svg/github.component'
import Instagram from 'app/_common/svg/instagram.component'
import Phone from 'app/_common/svg/phone.component'
import Telegram from 'app/_common/svg/telegram.component'

const Footer = () => {

    return (
        <footer className={'footer'}>
            <div className={'footer__content'}>
                <div className={'footer__main'}>
                    <div className={'footer__title'}>
                        DANYL TARASENKO
                    </div>
                    <div className={'footer__descr'}>
                        A Full Stack Developer with 2 years experience in building the web apps.
                    </div>
                </div>
                <div className={'footer__socials'}>
                    <div className={'footer__socials-title'}>
                        SOCIAL
                    </div>
                    <div className={'footer__socials-list'}>
                        <Github/>
                        <Instagram/>
                        <Phone/>
                        <Telegram/>
                    </div>
                </div>
            </div>
            <div className={'footer__copyright'}>
                @Copyright 2023. Made by Danyl Tarasenko
            </div>
        </footer>
    )
}

export default Footer