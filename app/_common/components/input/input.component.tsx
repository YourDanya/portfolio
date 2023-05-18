import {InputProps} from '@/app/_common/components/input/input.types'
import useInput from '@/app/_common/components/input/input.hook'

const Input = (props: InputProps) => {
    const {name, error, placeholder, label, type, className, value} = props
    const {onChange} = useInput(props)

    return (
        <div className={`input ${className}`}>
            <div className="input__state">
                {label && (
                    <label htmlFor={'input__label'}>
                        {label}
                    </label>
                )}
                <div class="input__wrapper">
                    {type === 'textarea' ? (
                        <textarea
                            className="input__textarea"
                            name={name}
                            onChange={onChange}
                            value={value}
                        />
                    ) : (
                        <input
                            className="input__field"
                            name={name}
                            type={type ?? 'text'}
                            onChange={onChange}
                            value={value}
                        />
                    )}
                    <div className={'input__placeholder'}>
                        {placeholder}
                    </div>
                </div>
                {error && (
                    <div className={'input__error'}/>
                )}
            </div>
        </div>
    )
}

export default Input