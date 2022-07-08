import React from "react";

export type OnOfPropsType = {
    onOf: boolean
    onChange: (onOf: boolean) => void
}

export function OnOff(props: OnOfPropsType) {
    console.log("OnOF Rendering")
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.onOf ? "green" : "white"
    }
    const ofStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !props.onOf ? "red" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: props.onOf ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onChange(true)
            }}>On
            </div>
            <div style={ofStyle} onClick={() => {
                props.onChange(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

