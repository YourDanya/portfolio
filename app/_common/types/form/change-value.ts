import {InputValues} from 'app/_common/components/input/input.types'

export type ChangeValue<T extends InputValues> = {[key in keyof T] : {name: key, value: T[key]}} [keyof T]