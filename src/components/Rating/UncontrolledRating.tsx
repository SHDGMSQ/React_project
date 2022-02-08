import React, {useState} from "react";

type UncontrolledRatingPropsType = {

}

export function UncontrolledRating(props: UncontrolledRatingPropsType) {
    //console.log("Rating rendering")

    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={ value > 0 } setValue={setValue} value={1}/>
            <Star selected={ value > 1 } setValue={setValue} value={2}/>
            <Star selected={ value > 2 } setValue={setValue} value={3}/>
            <Star selected={ value > 3 } setValue={setValue} value={4}/>
            <Star selected={ value > 4 } setValue={setValue} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: number
    setValue: (value: number) => void
}

function Star(props: StarPropsType) {

    const onClickHandler = () => {props.setValue(props.value)}
    //console.log("Star rendering")

    /*if (props.selected) {
        //console.log("Star rendering")
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }*/
    return <span onClick={onClickHandler}>{props.selected ? <b>star </b>: 'star '}</span>
}
