import React from "react";

type ItemType = {
    title: string,
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    onChange:() => void
    collapsed: boolean
    items: Array<ItemType>
    onClick:(value:any) => void
}
type AccordionTitlePropsType = {
    title: string
    onChange:() => void

}
export type AccordionBodyPropsType = {
    onClick:(value:any) => void
    items: Array<ItemType>
}

function AccordionSecret(props: AccordionPropsType) {
   //console.log("Accordion rendering")
        return <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}

            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
}
export const Accordion = React.memo(AccordionSecret)

function AccordionTitleSecret (props: AccordionTitlePropsType) {
    //console.log("AccordionTitle rendering")
    return <div>
        <h3 onClick={(e)=>props.onChange()}>{props.title}</h3>
    </div>
}
const AccordionTitle = React.memo(AccordionTitleSecret)

function AccordionBodySecret (props: AccordionBodyPropsType) {
    //console.log("AccordionBody rendering")


    return <div>
        <ul>
            {
                props.items.map( (m, index) => <li onClick={() => {props.onClick(m.value)}} key={index}>{m.title}</li>)
            }

        </ul>
    </div>
}
const AccordionBody = React.memo(AccordionBodySecret)