import {HamburgerProps} from 'app/_components/_layout/nav/hamburger/hamburger.types'

const Hamburger = (props: HamburgerProps) => {
    const {active, onClick} = props

    return (
        <div className={`hamburger ${active ? 'hamburger--active' : ''}`} onClick={onClick}>
            <div className={'hamburger__dash hamburger__dash--first'}/>
            <div className={'hamburger__dash hamburger__dash--second'}/>
            <div className={'hamburger__dash hamburger__dash--third'}/>
        </div>
    )
}

export default Hamburger