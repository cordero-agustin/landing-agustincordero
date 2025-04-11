const Button = (props) => {
console.log(props)
    return(
        <button className={props.estilo} onClick={props.handler}>{props.text}</button>
    )
}

export default Button