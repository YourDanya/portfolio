import {ChangeEvent} from 'react'

export type InputProps = {
   name: string,
   className: string,
   value: string | number,
   onChange?: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
   error?: string,
   placeholder?: string,
   label?: string,
   type?: string,
}
