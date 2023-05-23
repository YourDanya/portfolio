import {useLayoutEffect} from 'react'
import useThrottle from 'app/_common/hooks/throttle/throttle.hook'

const useResize = (callback: () => void) => {
    const onResize = useThrottle(callback, 500)

    useLayoutEffect(() => {
        onResize()
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])
}

export default useResize