import {useState} from 'react'

const useNav = () => {
    const [active, setActive] = useState(false)

    const onHamburer = () => {
        setActive(!active)
    }

    return {active, onHamburer}
}

export default useNav