import React, {useState} from "react";
import {Select} from "./Select";

export default {
    title: 'CustomSelect',
    component: Select
}
const itemsSelect = [{title: "Valera", value: "2"}, {title: "Dima", value: "3"}, {title: "Kiril", value: "4"}]
export const WithValue = () => {
    const [parentValue, setParentValue] = useState<string | undefined>("2")
    return <>
        <Select items={itemsSelect} value={parentValue} onChange={setParentValue}/>
    </>
}

export const WithoutValue = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)

    return <>
        <Select value={parentValue} items={itemsSelect} onChange={setParentValue}/>
    </>
}