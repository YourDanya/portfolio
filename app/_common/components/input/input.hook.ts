import {InputProps} from 'app/_common/components/input/input.types'
import {InputEvent} from 'app/_common/components/input/input.types'

const useInput = (props: InputProps) => {

    const onChange = (even: InputEvent) => {
        let {value, name}: {value: string | number, name: string} = event.target
        if (typeof this.value === 'number') {
            value = +value
        }
        props.onChange({value, name})
    }

    return {onChange}
}

export default useInput