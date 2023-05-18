const Experience = () => {
    return (
        <div className={'experience'}>
            <div className={'experience__title'}>
                EXPERIENCE
            </div>
            <div className={'expericence__job'}>
                <div className={'experience__job-time'}>
                    April 2022 - Current
                </div>
                <div className={'experience__job-about'}>
                    <div className={'experience__job-title'}>
                        Full Stack Developer at UNAMOUR
                    </div>
                    <div className={'experience__job-descr'}>
                        As a developer at UNAMOUR I built and maintained e-commerce app using next.js for client side and express-mongoose for server side. I build all components by my own. Built an api, connected to the db,. Handled auth using jwt and cookies. Used at first redux toolkit for state manager and than migrated to zustand. Was using next 12 and than migrated to next 13 for better performance and scalability. Connected WFP payment on the app. At the end I got fast, scalable, high perfomance and seo-friendly application. Which significcently increased the sales of the company and had a positive impact on business development.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience