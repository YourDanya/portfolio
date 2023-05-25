import unamour from 'public/images/projects-unamour.jpg'
import Image from 'next/image'
import useResize from 'app/_common/hooks/resize/resize.hook'
import {useState} from 'react'
import {useRef} from 'react'
import useProjects from 'app/_components/projects/projects.hook'

const Projects = () => {
    const {height, elemRef} = useProjects()

    return (
        <div className={'projects'} id={'projects'}>
            <div className={'projects__title'}>
                Projects
            </div>
            <div className={'projects__item'}>
                <div className={'projects__item-img-wrapper'} ref={elemRef}
                     style={{height}}
                >
                    <Image
                        className={'projects__item-img'}
                        fill={true}
                        src={unamour.src}
                        alt={'project image'}
                    />
                </div>
                <div className={'projects__item-about'}>
                    <div className={'projects__item-title'}>
                        UNAMOUR
                    </div>
                    <div className={'projects__item-descr'}>
                        E-commerce clothing app that uses server side rendering provided by Next.js
                    </div>
                    <a className={'default-btn projects__link'} href={'https://unamour.com.ua/'} target='_blank' rel='noreferrer'>
                        open
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects