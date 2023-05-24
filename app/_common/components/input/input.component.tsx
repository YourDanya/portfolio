import {InputProps} from 'app/_common/components/input/input.types'
import useInput from 'app/_common/components/input/input.hook'

const Input = (props: InputProps) => {
    const {name, error, placeholder, label, type, className, value} = props
    const {onChange, onFocus, focused} = useInput(props)

    return (
        <div className={`input ${className}`}>
            <div className={`input__state ${focused ? 'input__state--focused' : ''} 
            ${type === 'textarea' ? 'input__state--textarea' : ''} ${value ? 'input__state--filled' : ''}`}
            >
                {label && (
                    <label htmlFor={name} className={'input__label'}>
                        {label}
                    </label>
                )}
                <div className={'input__container'}>
                    <div className="input__placeholder-wrapper">
                        {type === 'textarea' ? (
                            <textarea
                                className="input__textarea"
                                name={name}
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onFocus}
                                value={value}
                            />
                        ) : (
                            <input
                                className="input__field"
                                name={name}
                                type={type ?? 'text'}
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onFocus}
                                value={value}
                            />
                        )}
                        <div className={'input__placeholder'}>
                            {placeholder}
                        </div>
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