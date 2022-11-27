import React from "react";
import Button from "./Button";

const Header = ({title , onAdd , showAddTask }) => {

    return(
        <div className="header"> 
            <h1>{title}</h1>
            <Button title = {showAddTask ? 'Close' : 'Add'} 
            color = {showAddTask ? 'red' : 'green'}
            onClick ={onAdd}/>
        </div>
        
    )
}




export default Header;
