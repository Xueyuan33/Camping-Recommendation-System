import React from "react";
import { Button } from "antd";

function NewButton(){
    return (
    <div style={{float:"right", display:"block", width:"100px"}}>
        <Button  style={{
            backgroundColor:"transparent",
            color:"rgba(255,255,255)"
        }} size="large">
            New
        </Button>
    </div>
    );
}

export default NewButton;
