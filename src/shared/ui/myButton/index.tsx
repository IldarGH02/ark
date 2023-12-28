import * as React from "react";
import {ReactNode} from "react";

interface IMyButton {
    buttonName: string | ReactNode
    className: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const MyButton: React.FC<IMyButton> = (props) => {
    return (
        <button
            className={props.className}
            onClick={props.onClick}
        >
            {props.buttonName}
        </button>
    )
}
