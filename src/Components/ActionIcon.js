import Icon from '@mui/material/Icon';
import { useState } from 'react';

export default function ActionIcon(props){
    const [hover, setHover] = useState(false);
    let style = {
        "width": 30,
        "height": 30,
        "fontSize": 30,
        "margin": 5,
        "lineHeight":"30px",
        "cursor": "pointer",
        "&:hover": {
            "color": "#0068c3",
        },
        color: hover ? props.hoverColor: "initial",
    }
    style = {...style, ...props.style}

    const clickHandler = () => {
        if(props.action) props.action(props)
    }
    return (
        <Icon 
            style={style}
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
            onclick={clickHandler}>
                {props.icon}
        </Icon>
    )
}