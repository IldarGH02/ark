import * as React from 'react'

interface IMyInput {
    className: string
    placeholder?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    value: string
    type?: string
}
export const MyInput: React.FC<IMyInput> = (props) => {
    return (
        <input
            className={props.className}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            type={props.type}
        />
    )
}