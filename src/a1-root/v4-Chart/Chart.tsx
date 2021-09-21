import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {HistoryCoinType} from "../API/cryptoAPI";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const myDataSource = {
    "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion"
    },
    "data": [
        {
            "label": "Venezuela",
            "value": "290"
        },
        {
            "label": "Saudi",
            "value": "260"
        },
        {
            "label": "Canada",
            "value": "180"
        },
        {
            "label": "Iran",
            "value": "140"
        },
        {
            "label": "Russia",
            "value": "115"
        },
        {
            "label": "UAE",
            "value": "100"
        },
        {
            "label": "US",
            "value": "30"
        },
        {
            "label": "China",
            "value": "300"
        }
    ]
};

const chartConfigs = {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
};

export const Chart = () => {

    let history = useSelector<AppRootStateType, Array<HistoryCoinType> | null>(state => state.coinCrypto.history)


    let arr: any = []
    let data = history
    data && data.forEach(i=>{
        arr.push({label: i.priceUsd, value: new Date(i.time)})

    })

    console.log(arr)
    return(
        <ReactFC {...chartConfigs} />
    )
}
