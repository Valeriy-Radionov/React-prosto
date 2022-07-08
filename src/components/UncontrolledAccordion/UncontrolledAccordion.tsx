import React, {useReducer} from 'react';
import {reducer} from "./Reducer";


type UncontrolledAccordionPropsType = {
    titleValue: string
}

const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {

    // let [collapsed, setCollapsed] = useState<boolean>(false)
    let [state, dispatch] = useReducer(reducer, {collapsed: true})
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: "TOGGLE-COLLAPSED"})
            }}/>
            {/*{!collapsed && <AccordionBody/>}*/}
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

export type  AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    );
}


export function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default UncontrolledAccordion
