import React from 'react';

import {ComponentStory} from "@storybook/react";
import UncontrolledAccordion from "./UncontrolledAccordion";

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}


const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion {...args} />;

export const MenuUnCollapsedMode = Template.bind({});
MenuUnCollapsedMode.args = {
    titleValue: "Main menu"
};





