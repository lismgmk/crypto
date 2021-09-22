import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {HistoryCoinType} from "../API/cryptoAPI";


class Label extends React.Component<{ offset: number, position: string, value: string }> {
    render() {
        return null;
    }
}

export const Chart = () => {

    let history = useSelector<AppRootStateType, Array<HistoryCoinType> | null>(state => state.coinCrypto.history)
    let arr: any = []
    let data = history
    data && data.forEach(i => {
        arr.push({name: new Date(i.time), interval: +i.priceUsd})
    })

    return (
        <LineChart
            width={800}
            height={400}
            data={arr}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey=''>
                <Label value={`Date from ${new Date(arr[0])} to ${new Date(arr[arr.length - 1])}`} offset={0}
                       position="bottom"/>
            </XAxis>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <Line name="Coast" type="monotone" dataKey="interval" stroke="#8884d8" activeDot={{r: 8}}/>

        </LineChart>

    )
}



