import useResponsive from '@/app/_common/hooks/responsive/responsive.hook'
import {useState} from 'react'

const useNav = () => {
    const {device} = useResponsive()

    let height = 50

    if (device !== 'large') {
        height = 40
    }

    const [active, setActive] = useState(false)

    const onHamburer = () => {
        setActive(!active)
    }

    return {height, active, onHamburer, device}
}

export default useNav