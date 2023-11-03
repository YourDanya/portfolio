import Button from 'app/_common/components/button/button.component'
import useContact from 'app/_components/contact/contact.hook'
import Input from 'app/_common/components/input/input.component'

const Contact = () => {
    const {values, onChange, onSubmit, success, error, loading} = useContact()

    return (
        <div className={'contact'} id={'contact'}>
            <div className={'contact__title'}>
                Contact
            </div>
            <div className={'contact__subtitle'}>
                Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
            </div>
            <form className={'contact__form'} onSubmit={onSubmit}>
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
                    className={'contact__input contact__textarea'}
                    name={'message'}
                    value={values.message}
                    placeholder={'Enter your message'}
                    label={'Message'}
                    type={'textarea'}
                    onChange={onChange}
                />
                <Button className={'contact__button'} onClick={onSubmit} loading={loading}>
                    Submit
                </Button>
                {success && (
                    <div className={'contact__success'}>
                        {success}
                    </div>
                )}
                {error && (
                    <div className={'contact__error'}>
                        {error}
                    </div>
                )}
            </form>
        </div>
    )
}

export default Contact