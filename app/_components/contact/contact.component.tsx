import useContact from '@/app/_components/contact/contact.hook'
import Input from '@/app/_common/components/input/input.component'
import Button from '@/app/_common/components/button/button.component'

const Contact = () => {
    const {values, onChange, onSubmit} = useContact()

    return (
        <div className={'contact'}>
            <div className={'contact__title'}>
                Contact
            </div>
            <div className={'contact__subtitle'}>
                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
            </div>
            <form className={'contact__form'}>
                <Input
                    className={'contact__input'}
                    name={'name'}
                    value={values.name}
                    placeholder={'Enter your name'}
                    label={'Name'}
                    onChange={onChange}
                />
                <Input
                    className={'contact__input'}
                    name={'email'}
                    value={values.email}
                    placeholder={'Enter your email'}
                    label={'Email'}
                    onChange={onChange}
                />
                <Input
                    className={'contact__input'}
                    name={'message'}
                    value={values.message}
                    placeholder={'Enter your message'}
                    label={'Enter your label'}
                    type={'textarea'}
                    onChange={onChange}
                />
                <Button onClick={onSubmit}/>
            </form>
        </div>
    )
}

export default Contact