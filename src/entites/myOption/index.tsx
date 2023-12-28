interface IMyOption {
    optionName: string
    value: string
    className: string
}

export const MyOption: React.FC<IMyOption> = (props) => {
    return (
        <option value={props.value} className={props.className}>{props.optionName}</option>
    )
}