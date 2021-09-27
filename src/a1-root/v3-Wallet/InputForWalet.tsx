import React, {useState} from 'react'
import {actionsWaletCrypto} from "../../Redusers/WalletCryptoReduser";
import {useDispatch} from "react-redux";
import {InputField} from "../common/InputField/InputField";
import s from "./TableWalletList/TableWalletList.module.scss";
import {Button} from "../common/Button/Button";

type InputForWalletType = {
    name: string
    id: string
    sum: number
    symbol: string
}


const InputForWalet = (props: InputForWalletType) => {


    const { id, sum, symbol} = props
    const dispatch = useDispatch();
    const [changeSpan, setChangeSpan] = useState<boolean>(true)
    const [coinValue, setCoinValue] = useState<any>(sum)

    const handleSubmit = (value: number, id: string) => {
        dispatch(actionsWaletCrypto.editSum(value, id))
        setChangeSpan(true)
    }
    const handleEdit = () => {
        setChangeSpan(false)
    }


    const [errors, setErrors] = useState('');
    const [disButton, setDisButton] = useState(false);


    const validate = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value) {
            setErrors('enter any value');
            setDisButton(true)
        } else if (/^0/.test(e.currentTarget.value)) {
            setErrors('enter any value');
            setDisButton(true)
        } else if (!/^[-+]?[0-9]*[.,]?[0-9]+(?:[eE][-+]?[0-9]+)?$/i.test(e.currentTarget.value)) {
            setCoinValue(sum)
            setErrors("Invalid value")
            setDisButton(true)

        } else {
            setDisButton(false)
        }
    }

    return (
        <>

            {changeSpan ? <>
                    <th className={s.col2}>
                       <span style={{
                           // width: "",
                           height: "10px",
                           borderBottom: '1px solid red'
                       }}>{sum}</span>
                    </th>
                    <th className={s.col3}>
                        {symbol}
                    </th>
                    <th className={s.col4}>
                        <Button
                            width={80}
                            color='light-blue'
                            rounded
                            onClick={handleEdit}>Edit</Button>
                    </th>
                </>
                :
                <>
                    <InputField
                        label={'Coin'}
                        type={'coin'}
                        value={coinValue}
                        onBlur={e => validate(e)}
                        onChange={e => setCoinValue(e.currentTarget.value)}
                        error={errors !== '' ? errors : null}
                    />
                    <th className={s.col3}>
                        {symbol}
                    </th>
                    <th className={s.col4}>
                        <Button
                            width={80}
                            color='light-blue'
                            rounded
                            disabled={disButton}
                            onClick={() => handleSubmit(coinValue, id)
                            }>Save</Button>
                    </th>
                </>
            }
        </>
    )
}

export default InputForWalet
