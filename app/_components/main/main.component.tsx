import Button from 'app/_common/components/button/button.component'

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
                <Button className={'main__button'}>
                    Projects
                </Button>
            </div>
        </div>
    )
}

export default Main