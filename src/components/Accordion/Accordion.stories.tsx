import React, {useState} from 'react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";


export default {
    title: 'components/Accordion',
    component: Accordion,
}

const callback = action("accordion mode change event fired")
const onClickCallback = action("some item was clicked")

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} onChange={callback} collapsed={true} items={[]} onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion
    collapsed={false}
    onChange={callback}
    titleValue={'Users'}
    onClick={onClickCallback}
    items={[
        {title:'Dimych', value: 1},
        {title: 'Valera', value: 2},
        {title:'Artem', value: 3},
        {title:'Viktor', value: 4}
    ]}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);

    return <Accordion
        titleValue={"Users"}
        onChange={ () => setValue(!value) }
        collapsed={value}
        onClick={(id)=>{alert('user with ID `${id}` should be happy')}}
        items={[
            {title:'Dimych', value: 1},
            {title: 'Valera', value: 2},
            {title:'Artem', value: 3},
            {title:'Viktor', value: 4}
        ]}/>
}
