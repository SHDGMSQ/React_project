import React from "react";
import s from "./OnOff.module.css"

type OnOffPropsType = {
    value: boolean
}

export function OnOff (props: OnOffPropsType) {
    return <div className={s.body}>
        <div className={ props.value? s.on : s.init }>On</div>
        <div className={ !props.value? s.off: s.init }>Off</div>
        <div className={ props.value? s.lampOn : s.lampOff }> </div>
    </div>
}
