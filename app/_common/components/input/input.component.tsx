import {InputProps} from 'app/_common/components/input/input.types'
import useInput from 'app/_common/components/input/input.hook'

const Input = (props: InputProps) => {
    const {name, error, label, type, className, value} = props
    const state = useInput(props)
    const {focused} = state

    return (
        <div className={`input ${className} ${focused ? 'input--focused' : ''}
        ${type=== 'textarea' ? 'input--textarea' : ''}
        ${value ? 'input--filled' : ''}`}
        >
            {label && (
                <label htmlFor={name} className={'input__label'}>
                    {label}
                </label>
            )}
            <div className={'input__container'}>
                <InputWrapper state={state}/>
            </div>
            {error && (
                <div className={'input__error'}/>
            )}
        </div>
    )
}
export default Input

export const InputWrapper = ({state}: {state: ReturnType<typeof useInput>}) => {
    const {onFocus, props} = state
    const {onChange, value, type, name, placeholder} = props

    return (
        <div className="input__wrapper">
            {type === 'textarea' ? (
                <textarea
                    className="input__field"
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
    )
}