import {useState} from 'react'
import {initValues} from 'app/_components/contact/contact.content'
import {ChangeValue} from 'app/_common/components/input/input.types'

const useContact = () => {
    const [values, setValues] = useState(initValues)

    const onChange = ({value, name}: ChangeValue<typeof values>) => {
        values[name] = value
        setValues(values)
    }

    const onSubmit = () => {

    }

    return {values, onChange, onSubmit}
}

export default useContact