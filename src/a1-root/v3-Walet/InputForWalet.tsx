import React, {useState} from 'react'
import {actionsWaletCrypto, CoinInWalletType} from "../Redusers/WalletCryptoReduser";
import {useDispatch, useSelector} from "react-redux";

type InputForWalletType = {
    name: string
    id: string
    sum: number
    symbol: string
    // setDisable: (val: boolean)=>void
}


const InputForWalet = (props: InputForWalletType) => {


    const {name, id, sum, symbol} = props
    const dispatch = useDispatch();
    const [changeSpan, setChangeSpan] = useState<boolean>(true)
    const [coinValue, setCoinValue] = useState<number>(sum)

    const handleSubmit = (value: number, id: string) => {
        dispatch(actionsWaletCrypto.editSum(value, id))
        setChangeSpan(true)
    }
    const handleEdit = () => {
        setChangeSpan(false)
    }

    return (
        <div>
            Валюта {name}
            {changeSpan ?
                <div>
                       <span style={{
                           width: "20px",
                           height: "10px",
                           borderBottom: '1px solid red'
                       }}>{sum}</span> {symbol}
                    <button onClick={handleEdit}>Edit</button>
                </div> :
                <div>
                    <input
                        value={coinValue}
                        placeholder='enter value'
                        onChange={(e) => {
                            setCoinValue(+e.currentTarget.value)
                        }}
                    />
                    {symbol}
                    <button onClick={() => handleSubmit(coinValue, id)}>Save</button>
                </div>
            }
        </div>
    )
}

export default InputForWalet;
