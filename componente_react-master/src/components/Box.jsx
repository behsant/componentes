function Box(props){
   
    return(
        <div className={props.color}>
            <span>{props.title}</span><br/>
            <span>{props.number}</span>
          
        </div>
    )
}
export default Box