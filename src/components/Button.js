import React from "react";

const Button = (props) => {
    return(
        <div>
            <button 
            className="btn" 
            style={{backgroundColor: props.color}}
            onClick = {props.onClick}>
                {props.title}
                </button>
        </div>
    );
}


export default Button;