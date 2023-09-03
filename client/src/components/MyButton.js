

export const MyButton = ({value,onClick,winner}) => {
    let disable = false;
    
    if(value || winner){
        disable = true
    }
    return(
        <button style={{
                    width:"90px",
                    height:"90px",
                    display:'inline-block',
                
            }}
            onClick={onClick}
            disabled={disable}
            >{value}</button>
    )
}