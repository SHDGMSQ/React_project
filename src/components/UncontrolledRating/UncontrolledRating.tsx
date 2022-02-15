import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type UncontrolledRatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}
type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function UncontrolledRatingSecret (props: UncontrolledRatingPropsType) {
    //console.log("Rating rendering")

    const [value, setValue] = useState<RatingValueType>(props.defaultValue? props.defaultValue: 0)

    return (
        <div>
            <Star selected={ value > 0 } setValue={ ()=>{setValue(1); props.onChange(1)} } />
            <Star selected={ value > 1 } setValue={ ()=>{setValue(2); props.onChange(2)} } />
            <Star selected={ value > 2 } setValue={ ()=>{setValue(3); props.onChange(3)} } />
            <Star selected={ value > 3 } setValue={ ()=>{setValue(4); props.onChange(4)} } />
            <Star selected={ value > 4 } setValue={ ()=>{setValue(5); props.onChange(5)} } />
        </div>
    )
}
export const UncontrolledRating = React.memo(UncontrolledRatingSecret)

function StarSecret (props: StarPropsType) {

    const onClickHandler = () => {props.setValue()}
    //console.log("Star rendering")

    /*if (props.selected) {
        //console.log("Star rendering")
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }*/
    return <span onClick={onClickHandler}>{props.selected ? <b>star </b>: 'star '}</span>
}
const Star = React.memo(StarSecret)
