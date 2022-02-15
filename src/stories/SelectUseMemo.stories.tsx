import React, {useState, ChangeEvent, useMemo} from "react";


export default {
    title: 'components/SelectUseMemo',
}

export const HelpWithMemo = () => {
    const style = {
        display: 'inline-block',
        marginLeft: '10px'
    }

    const [cities, setCities] = useState([
        {id: 'belarusId', title: 'Minsk', countPeople: 2000000},
        {id: 'belarusId', title: 'Vitebsk', countPeople: 300000},
        {id: 'belarusId', title: 'Gomel', countPeople: 500000},
        {id: 'russiaId', title: 'Moscow', countPeople: 15000000},
        {id: 'russiaId', title: 'Novosibirsk', countPeople: 3000000},
        {id: 'russiaId', title: 'Penza', countPeople: 100000},
        {id: 'ukraineId', title: 'Kiev', countPeople: 4000000},
        {id: 'ukraineId', title: 'Lvov', countPeople: 2000000},
        {id: 'ukraineId', title: 'Odessa', countPeople: 1500000},
    ])

    const allCitiesOptions = useMemo( () => {
        return cities.map((m, i) => {
            return <option key={i}>{m.title}</option>
        })
    }, [cities] )
    const moreMillionPeopleOptions = useMemo( () => {
        return cities.filter(f => f.countPeople > 1000000).map((m, i) => {
            return <option key={i}>{m.title}</option>
        })
    }, [cities] )
    const citiesWithMOptions = useMemo( () => {
        return cities.filter(f => f.title.toLowerCase().indexOf("m") > -1).map((m, i) => {
            return <option key={i}>{m.title}</option>
        })
    }, [cities] )
    const belorussianCitiesOptions = useMemo( () => {
        return cities.filter(f => f.id === 'belarusId').map((m, i) => {
            return <option key={i}>{m.title}</option>
        })
    }, [cities] )
    const russianCitiesOptions = useMemo( () => {
        return cities.filter(f => f.id === 'russiaId').map((m, i) => {
            return <option key={i}>{m.title}</option>
        })
    }, [cities] )
    const ukraineCitiesOptions = useMemo( () => {
        return cities.filter(f => f.id === 'ukraineId').map((m, i) => {
            return <option key={i}>{m.title}</option>
        })
    }, [cities] )

    const [value, setValue] = useState<number>(0)

    const onClickButton = () => {
        setValue(value + 1)
        console.log('Button clicked')
    }

    return <div>
        <div>
        <button onClick={onClickButton}>add</button>
        {value}
        </div>
        <div style={style}>
            <div>
                All Cities
            </div>
            <SelectComponent options={allCitiesOptions}/>
        </div>
        <div style={style}>
            <div>
                Cities Over 1 million peoples
            </div>
            <SelectComponent options={moreMillionPeopleOptions}/>
        </div>
        <div style={style}>
            <div>
                Cities with symbol 'M'
            </div>
            <SelectComponent options={citiesWithMOptions}/>
        </div>
        <div style={style}>
            <div>
                Belorussian Cities
            </div>
            <SelectComponent options={belorussianCitiesOptions}/>
        </div>
        <div style={style}>
            <div>
                Russian Cities
            </div>
            <SelectComponent options={russianCitiesOptions}/>
        </div>
        <div style={style}>
            <div>
                Ukraine Cities
            </div>
            <SelectComponent options={ukraineCitiesOptions}/>
        </div>
    </div>
}

type SelectComponentPropsType = {
    options: any
}

const SelectComponentSecret = (props: SelectComponentPropsType) => {
    console.log('Select component was rendered')

    const [value, setValue] = useState('')

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return <>
        <select value={value} onChange={onChangeCallback}>
            {props.options}
        </select>
    </>
}
const SelectComponent = React.memo(SelectComponentSecret)