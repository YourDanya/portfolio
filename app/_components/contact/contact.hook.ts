import {useState} from 'react'
import {initValues} from 'app/_components/contact/contact.content'
import {ChangeValue} from 'app/_common/components/input/input.types'
import emailjs from '@emailjs/browser'
import {useEffect} from 'react'

const useContact = () => {
    const [values, setValues] = useState(initValues)

    const onChange = ({value, name}: ChangeValue<typeof values>) => {
        values[name] = value
        setValues({...values})
    }

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const onSubmit = async(event) => {
        event.preventDefault()
        setLoading(true)
        setSuccess('')
        setError('')
        try {
            await emailjs.send('service_mj120ub', 'template_uky7m9f', values, 'user_oUDcNqWQmOnViFne4XBln')
            setSuccess('You have succesffully sent the message!')
            setValues(initValues)
        } catch (err: any) {
            console.log('err', err)
            setError('An error has occurred. Try again later.')
        }
        setLoading(false)
    }

    return {values, onChange, onSubmit, loading, error, success}
}

export default useContact