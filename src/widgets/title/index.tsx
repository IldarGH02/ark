import React from "react";

interface ITitle {
    className: string
    titleName: string
}

export const Title: React.FC<ITitle> = (props) => {
    return (
        <h1 className={props.className}>{props.titleName}</h1>
    )
}