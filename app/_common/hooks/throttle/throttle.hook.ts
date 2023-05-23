import {useRef} from 'react'

const useThrottle = (callback: (...args: any) => void, delay = 1000) => {
    const argsRef = useRef<any>([])
    const lastExecTimeRef = useRef(0)
    const timeoutIdRef = useRef<NodeJS.Timer>(0 as NodeJS.Timer)

    return (...args) => {
        const currentTime = new Date().getTime()
        argsRef.current = args ?? []

        if (currentTime - lastExecTimeRef.current < delay) {
            clearTimeout(timeoutIdRef.current)

            const remainingDelay = delay - (currentTime - lastExecTimeRef.current)

            timeoutIdRef.current = setTimeout( () => {
                lastExecTimeRef.current = new Date().getTime()
                callback(...argsRef.current)
            }, remainingDelay)
        } else {
            lastExecTimeRef.current = currentTime
            callback(...argsRef.current)
        }
    }
}

export default useThrottle