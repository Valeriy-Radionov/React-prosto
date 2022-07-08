import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";

export default {
    title: 'Rating stories',
    component: Rating,
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const RatingOne = Template.bind({});

RatingOne.args = {
    value: 1
};
export const RatingTwoNoAction = Template.bind({});

RatingTwoNoAction.args = {
    value: 2,
    onClick: value => {
        return value
    },
};
export const RatingClick: ComponentStory<typeof Rating> = (args) => {
    let [value, setValue] = useState<RatingValueType>(0)

    return (
        <div>
            Click star:
            <Rating {...args} value={value} onClick={(ratingValue) => setValue(ratingValue)}/>
        </div>
    )
}

