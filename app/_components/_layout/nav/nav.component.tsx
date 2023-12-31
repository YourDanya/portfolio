import Image from 'next/image'
import me from 'public/images/me.jpeg'
import useNav from 'app/_components/_layout/nav/nav.hook'
import Hamburger from 'app/_components/_layout/nav/hamburger/hamburger'

const Nav = () => {
    const {active, onHamburer} = useNav()

    return (
        <nav className={'nav'}>
            <div className="nav__wrapper">
                <div className={'nav__main'}>
                    <div className={'nav__image-wrapper'}>
                        <Image
                            className={'nav__image'}
                            alt={'nav image'}
                            src={me.src}
                            sizes={'(max-width: 991px) 40px, 50px'}
                            fill={true}
                        />
                    </div>
                    <div className={'nav__title'}>
                        danyl tarasenko
                    </div>
                </div>
                <div className={`nav__menu ${active ? 'nav__menu--active' : ''}`}>
                    <a className={'nav__menu-item nav__menu-item--first'} href={'#about'}>
                        about
                    </a>
                    <a className={'nav__menu-item'} href={'#experience'}>
                        experience
                    </a>
                    <a className={'nav__menu-item'} href={'#projects'}>
                        projects
                    </a>
                    <a className={'nav__menu-item nav__menu-item--last'} href={'#contact'}>
                        contact
                    </a>
                </div>
                <Hamburger active={active} onClick={onHamburer}/>
            </div>
        </nav>
    )
}

export default Nav