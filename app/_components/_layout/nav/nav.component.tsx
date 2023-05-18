import Image from 'next/image'
import me from '@/public/images/me.jpeg'
import useNav from '@/app/_components/_layout/nav/nav.hook'
import Hamburger from '@/app/_components/_layout/nav/hamburger/hamburger'

const Nav = () => {
    const {height, active, setActive, onHamburer, device} = useNav()

    return (
        <nav className={'nav'}>
            <div className="nav__wrapper">
                <div className={'nav__main'}>
                    <Image
                        className={'nav__image'}
                        alt={'nav image'}
                        src={me.src}
                        width={height}
                        height={height}
                        quality={100}
                    />
                    <div className={'nav__title'}>
                        danyl tarasenko
                    </div>
                </div>
                <div className={`nav__menu ${active ? 'nav__menu--active' : ''}`}>
                    <div className={'nav__menu-item nav__menu-item--first'}>
                        about
                    </div>
                    <div className={'nav__menu-item'}>
                        experience
                    </div>
                    <div className={'nav__menu-item'}>
                        projects
                    </div>
                    <div className={'nav__menu-item nav__menu-item--last'}>
                        contact
                    </div>
                </div>
                {(device === 'small' || device === 'tiny') && (
                    <Hamburger active={active} onClick={onHamburer}/>
                )}
            </div>
        </nav>
    )
}

export default Nav