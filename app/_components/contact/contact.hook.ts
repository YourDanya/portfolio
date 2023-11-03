import {useState} from 'react'
import {initValues} from 'app/_components/contact/contact.content'
import emailjs from '@emailjs/browser'
import {FormEvent} from 'react'
import {MouseEvent} from 'react'
import {ChangeEvent} from 'react'
import {inputChange} from 'app/_common/utils/input-change/input-change'

const useContact = () => {
    const [values, setValues] = useState(initValues)

    const onChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = inputChange<typeof values>(event)
        values[name] = value
        setValues({...values})
    }

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const onSubmit = async(event: FormEvent<HTMLFormElement> | MouseEvent) => {
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