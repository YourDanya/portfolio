import {InputProps} from 'app/_common/components/input/input.types'
import {InputEvent} from 'app/_common/components/input/input.types'
import {useState} from 'react'

const useInput = (props: InputProps) => {

    const onChange = (even: InputEvent) => {
        let {value, name}: {value: string | number, name: string} = event.target
        if (typeof props.value === 'number') {
            value = +value
        }
        props.onChange({value, name})
    }

    const [focused, setFocused] = useState(false)

    const onFocus = () => {
        setFocused(!focused)
    }

    return {onChange, focused, onFocus}
}

export default useInput