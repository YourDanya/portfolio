import {useRef} from 'react'

const useAbout = () => {
    const elemRef = useRef<HTMLDivElement | null>(null)

    return {elemRef}
}

export default useAbout