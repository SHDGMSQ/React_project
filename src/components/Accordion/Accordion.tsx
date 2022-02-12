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

export function Accordion(props: AccordionPropsType) {
   //console.log("Accordion rendering")
        return <div>
            <AccordionTitle
                title={props.titleValue}
                onChange={props.onChange}

            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange:() => void

}

function AccordionTitle (props: AccordionTitlePropsType) {
    //console.log("AccordionTitle rendering")
    return <div>
        <h3 onClick={(e)=>props.onChange()}>{props.title}</h3>
    </div>
}
export type AccordionBodyPropsType = {
    onClick:(value:any) => void
    items: Array<ItemType>
}

function AccordionBody (props: AccordionBodyPropsType) {
    //console.log("AccordionBody rendering")


    return <div>
        <ul>
            {
                props.items.map( (m, index) => <li onClick={() => {props.onClick(m.value)}} key={index}>{m.title}</li>)
            }

        </ul>
    </div>
}
