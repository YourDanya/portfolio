import {MutableRefObject} from 'react'
import {ChangeEvent} from 'react'

export type InputValue = string | boolean | number

export type InputValues = Record<string, InputValue>

export type ChangeCallback<ValuesT> = (params: {changeValues: ValuesT, name: keyof ValuesT}) => void

export type UseInputChange = <ValuesT extends InputValues>(params: {
    values: ValuesT,
    changeCallback: ChangeCallback<ValuesT>
}) => {
    onChange: (event: ChangeEvent<HTMLElement>) => void,
    valuesRef: MutableRefObject<ValuesT>
}