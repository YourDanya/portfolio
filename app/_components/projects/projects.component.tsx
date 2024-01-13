import unamour from 'public/images/projects-unamour.jpg'

const Projects = () => {

    return (
        <div className={'projects'} id={'projects'}>
            <div className={'projects__title'}>
                Projects
            </div>
            <div className={'projects__item'}>
                <img
                    className={'projects__item-img'}
                    src={unamour.src}
                    alt={'project image'}
                />
                <div className={'projects__item-about'}>
                    <div className={'projects__item-title'}>
                        UNAMOUR
                    </div>
                    <div className={'projects__item-descr'}>
                        E-commerce clothing app that uses server side rendering provided by Next.js
                    </div>
                    <a className={'default-btn projects__link'} href={'https://shop.dannydev.net/shop-items/all'} target='_blank'
                       rel='noreferrer'>
                        open
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects