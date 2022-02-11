import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";
import {UncontrolledRating} from "./UncontrolledRating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'components/UncontrolledRating',
    component: UncontrolledRating,
}

const callback = action("UncontrolledRating changed inside component ")

export const EmptyUncontrolledRating = () => <UncontrolledRating  defaultValue={0} onChange={callback}/>
export const UncontrolledRating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const UncontrolledRating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>
export const UncontrolledRating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>
export const UncontrolledRating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>
export const UncontrolledRating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(3)

    return <Rating value={rating} onClick={setRating}/>
}
