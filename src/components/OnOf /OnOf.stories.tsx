import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {OnOff} from "./OnOf";


export default {
    title: 'OnOf',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />;

export const OnMode = Template.bind({});
OnMode.args = {
    onOf: true,
};

export const OnOfClick: ComponentStory<typeof OnOff> = (args) => {
    const [value, setValue] = useState<boolean>(false)
    return (
        <OnOff {...args} onOf={value} onChange={(switcher) => setValue(switcher)}/>
    )
}




