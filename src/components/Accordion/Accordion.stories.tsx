import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'components/Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired")

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} onChange={callback} collapsed={true}/>
export const UsersUncollapsedMode = () => <Accordion collapsed={false} onChange={callback} titleValue={'Users'}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);

    return <Accordion titleValue={"Users"} onChange={ () => setValue(!value) } collapsed={value}/>
}
