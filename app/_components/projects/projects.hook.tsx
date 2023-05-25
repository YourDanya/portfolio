import {useRef} from 'react'
import {useState} from 'react'
import useResize from 'app/_common/hooks/resize/resize.hook'

const useProjects = () => {
    const elemRef = useRef< | null>(null)
    const [height, setHeight] = useState(0)

    useResize(() => {
        const width = (elemRef.current as HTMLDivElement).getBoundingClientRect().width
        setHeight(width * 831 / 1280)
    })

    return {height, elemRef}
}

export default useProjects