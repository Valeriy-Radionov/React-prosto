import React, {useState} from "react";

type OnOfPropsType = {
    onChange: (on: boolean) => void
}

function UncontrolledOnOf(props: OnOfPropsType) {
    console.log("OnOF Rendering")
    let [on, setOn] = useState<boolean>(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const ofStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: !on ? "red" : "white"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "10px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "2px",
        backgroundColor: on ? "green" : "red"
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On
            </div>
            <div style={ofStyle} onClick={offClicked}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default UncontrolledOnOf