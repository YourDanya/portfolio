import Link from 'next/link'
import Image from 'next/image'
import Github from '@/app/_common/svg/github.component'
import Phone from '@/app/_common/svg/phone.component'
import Instagram from '@/app/_common/svg/instagram.component'
import Telegram from '@/app/_common/svg/telegram.component'

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <Link href={'/'}>
                <Github/>
            </Link>
            <Link href={'/'}>
                <Instagram/>
            </Link>
            <Link href={'/'}>
                <Phone/>
            </Link>
            <Link href={'/'}>
                <Telegram/>
            </Link>
        </div>
    )
}

export default Sidebar