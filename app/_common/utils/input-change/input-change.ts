import {InputValues} from 'app/_common/types/form/input-values'
import {ChangeValue} from 'app/_common/types/form/change-value'
import {ChangeEvent} from 'react'
export const inputChange = <T extends InputValues> (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    let {value, name, checked}: {value: string | number | boolean, name: string, checked?: boolean} = event.currentTarget

    if (event.currentTarget.type === 'number') {
        value = +value
    }
    if (event.currentTarget.type === 'checkbox') {
        value = checked as boolean
    }

    return {value, name} as ChangeValue<T>
}
