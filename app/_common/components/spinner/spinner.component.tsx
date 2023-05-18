'use client'

import {FC} from 'react'
import {SpinnerProps} from '@/app/_common/components/spinner/spinner.types'

const Spinner: FC<SpinnerProps> = ({className}) => {
    return (
        <div className={`spinner ${className?? ''}`}>
            <div className={'spinner__content'}/>
        </div>
    )
}

export default Spinner