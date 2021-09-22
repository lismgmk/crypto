import React, {useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {actionsWaletCrypto, CoinInWalletType} from "../Redusers/WalletCryptoReduser";
import {nanoid} from "nanoid";
import InputForWalet from "./InputForWalet";


function Walet() {

    const dispatch = useDispatch();
    const [changeSpan, setChangeSpan] = useState<boolean>(true)
    // const [disable, setDisable] = useState<boolean>(true)

    let coins = useSelector<AppRootStateType, Array<CoinInWalletType>>(state => state.wallet.coinInWallet)
    const handleSubmit = (value: number, id: string) => {
        dispatch(actionsWaletCrypto.editSum(value, id))
        setChangeSpan(true)
    }
    const handleDelete = (id: string) => {
        dispatch(actionsWaletCrypto.deleteCoin(id))
    }

    return (
        <div
            style={{
                width: "200px",
                height: "400px",
                border: '1px solid red'
            }}>
            <h2>Кошелек</h2>

            {coins.map(i => {
                return <div
                    key={nanoid()}
                >
                    {/*<button disabled={disable}>Block Button</button>*/}
                        <InputForWalet
                            name={i.name}
                            id={i.id}
                            sum={i.sum}
                            symbol={i.symbol}

                        // setDisable={setDisable}
                        />


                    <button onClick={() => handleDelete(i.id)}>Delete</button>
                </div>
            })
            }
            <button onClick={()=>handleSubmit}>Submit</button>

        </div>
    )
}

export default Walet;
