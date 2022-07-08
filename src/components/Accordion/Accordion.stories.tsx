import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import AccordionPropsType from "./Accordion";
import Accordion from "./Accordion";
import AccordionTitle from "./Accordion";
import {action, actions} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: AccordionPropsType,
} as ComponentMeta<typeof AccordionPropsType>
const onClickCallBack = action("some item was clicked")

let callbackAction = actions("accordion mode change event fired")

const Template: ComponentStory<typeof AccordionPropsType> = (args) => <AccordionPropsType {...args} />;

export const MenuUnCollapsedMode = Template.bind({});
MenuUnCollapsedMode.args = {
    titleValue: "Menu",
    collapsed: false,
    items: [{title: "Valera", value: 2}, {title: "Dima", value: 3}, {title: "Kiril", value: 4}],
    onClick: onClickCallBack
};

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: "Menu",
    collapsed: true,
    items: []
};


export const ModeChanging: ComponentStory<typeof AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(false)

    return (
        <div>
            <AccordionTitle {...args} collapsed={value} onChange={() => {
                setValue(!value)
            }}/>
        </div>
    )
}
ModeChanging.args = {
    titleValue: "Click me",
    collapsed: false,
    items: [{title: "Valera", value: 2}, {title: "Dima", value: 3}, {title: "Kiril", value: 4}],
    onClick: (value) => {
        alert(`user with ID ${value} should be happy`)
    }
}






