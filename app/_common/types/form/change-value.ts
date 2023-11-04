import {InputValues} from 'app/_common/types/form/input-values'

export type ChangeValue<T extends InputValues> = {[key in keyof T] : {name: key, value: T[key]}} [keyof T]