import 'app/_common/components/button/button.styles.sass'
import 'app/_common/styles/global.styles.sass'
import 'app/_components/_layout/footer/footer.styles.sass'
import 'app/_components/_layout/nav/hamburger/hamburger.styles.sass'
import 'app/_components/_layout/nav/nav.styles.sass'
import 'app/_components/_layout/sidebar/sidebar.styles.sass'
import 'app/_components/main/main.styles.sass'
import 'app/_components/about/about.styles.sass'
import 'app/_components/contact/contact.styles.sass'
import 'app/_components/projects/projects.styles.sass'
import 'app/_components/experience/experience.styles.sass'
import 'app/_components/education/education.styles.sass'

import {Metadata} from 'next'
import {LayoutProps} from 'app/layout.types'
import RootLayout from 'app/_components/_layout/layout.component'

export const metadata: Metadata = {
    title: 'DANYL',
    description: 'Danyl',
    viewport: 'width=device-width, height=device-height, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'
}

const Layout = (props: LayoutProps) => {
    const {children, params: {locale}} = props
    
    return (
        <RootLayout locale={locale}>
            {children}
        </RootLayout>
    )
}

export default Layout