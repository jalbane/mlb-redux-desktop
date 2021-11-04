import React from "react";

export const Button = (props) => {
    return <button type="button" onClick={() => props.handleEvent(props.index)}>{props.children}</button>
}

