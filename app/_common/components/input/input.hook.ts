import {InputProps} from 'app/_common/components/input/input.types'
import {useState} from 'react'

const useInput = (props: InputProps) => {

    const [focused, setFocused] = useState(false)

    const onFocus = () => {
        setFocused(!focused)
    }

    return {focused, onFocus, props}
}

export default useInput