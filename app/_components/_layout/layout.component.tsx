'use client'

import Nav from '@/app/_components/_layout/nav/nav.component'
import Footer from '@/app/_components/_layout/footer/footer.component'
import Sidebar from '@/app/_components/_layout/sidebar/sidebar.component'
import {LayoutProps} from '@/app/_components/_layout/layout.types'

const Layout = (props: LayoutProps) => {
    const {children} = props

    return (
        <html>
        <head/>
        <body>
        <Nav/>
        <Sidebar/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}

export default Layout