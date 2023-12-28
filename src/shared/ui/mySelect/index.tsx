import React, {ReactNode} from "react";

interface MySelect {
    children: ReactNode
    defaultValue?: string
    name?: string
    className: string
    onChange: React.ChangeEventHandler<HTMLSelectElement>
}

export const MySelect: React.FC<MySelect> = (props) => {
    return (
        <select className={props.className} defaultValue={props.defaultValue} onChange={props.onChange}>
            {props.children}
        </select>
    )
}