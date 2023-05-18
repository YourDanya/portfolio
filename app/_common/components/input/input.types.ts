export type InputProps = {
   name: string,
   error: string,
   placeholder: string,
   label: string,
   type?: string,
   className: string,
   value: string | number,
   onChange: (params: {value: string | number, name: string}) => void
}


export type InputEvent = {
   target: {name: string, value: string}
}

export type ChangeValue<T extends InputValues> = {[key in keyof T] : {name: key, value: T[key]}} [keyof T]

export type InputValues = Record<string, string | number>