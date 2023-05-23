import {useEffect} from 'react'
import {useState} from 'react'
import {useRef} from 'react'
import {Device} from 'app/_common/hooks/responsive/responseive.types'
import {useLayoutEffect} from 'react'

const useResponsive = () => {
    const [device, setDevice] = useState<Device>('large')
    const deviceRef = useRef<Device>('large')
    
    const resize = () => {
        const width = window.innerWidth
        if (width > 991 && deviceRef.current !== 'large') {
            deviceRef.current = 'large'
            setDevice('large')
        } else if (width <= 991 && width > 768 && deviceRef.current !== 'medium') {
            deviceRef.current = 'medium'
            setDevice('medium')
        } else if (width <= 768 && width > 576 && deviceRef.current !== 'small') {
            deviceRef.current = 'small'
            setDevice('small')
        } else if (width <= 576 && deviceRef.current !== 'tiny') {
            deviceRef.current = 'tiny'
            setDevice('tiny')
        }
    }

    useLayoutEffect(() => {
        resize()
    }, [])

    useLayoutEffect(() => {
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [])

    return {device}
}

export default useResponsive