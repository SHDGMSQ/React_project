import React, {useReducer} from "react";
import {reducer} from "./reducer";

type UncontrolledAccordionPropsType = {
    titleValue: string
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function UncontrolledAccordionSecret(props: UncontrolledAccordionPropsType) {
    //console.log("Accordion rendering")

    //const [collapsed, setCollapsed] = useState(true)

    const [state, dispatch] = useReducer(reducer, {collapsed: true})

    //const onClickAccordionTitle = () => { setCollapsed(!collapsed) }
    const onClickAccordionTitle = () => { dispatch({type: 'TOGGLE-COLLAPSED' }) }

    return <div>
            <AccordionTitle title={props.titleValue} onClick={onClickAccordionTitle}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
}
export const UncontrolledAccordion = React.memo(UncontrolledAccordionSecret)

function AccordionTitleSecret (props: AccordionTitlePropsType) {
    //console.log("AccordionTitle rendering")

    return <div>
        <h3 onClick={ () => {props.onClick()} }>{props.title}</h3>
    </div>
}
const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionBodySecret () {
    //console.log("AccordionBody rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}
const AccordionBody = React.memo(AccordionBodySecret)
