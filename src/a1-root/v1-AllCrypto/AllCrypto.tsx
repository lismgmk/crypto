import React, {useEffect, useState} from 'react'
import { Container } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../App/store";
import {CoinType} from "../API/cryptoAPI";
import {getAllCoin} from "../Redusers/MainCryptoReduser";
import {nanoid} from "nanoid";
import {Link, Redirect} from "react-router-dom";
import {actionsWaletCrypto} from "../Redusers/WalletCryptoReduser";
import Checkbox from "../common/Checkbox/Checkbox";
import {PaginationWrapper} from "../common/Pagination/PaginationWrapper";
import {actionsForPagination} from "../Redusers/paginationReduser";


const AllCrypto = React.memo( () => {
    const dispatch = useDispatch();

    let AllCoins = useSelector<AppRootStateType, Array<CoinType>>(state => state.allCrypto.allCoin)
    const [coinId, setCoinId] = useState<string>('')
    // const [nameCoin, setNameCoin] = useState<string>('')
    const [flag, setFlag] = useState<boolean>(false)
    let page = 5


  const pageTotalCount = useSelector<AppRootStateType, number>(state => state.pagination.pageTotalCount)
  const currentPage = useSelector<AppRootStateType, number>(state => state.pagination.page)
  const pageCount = useSelector<AppRootStateType, number>(state => state.pagination.pageCount)



   const setPageCount = (page: number)=>{
        dispatch(actionsForPagination.setPageCount(page))
       // setNeedlyPage(page*pageCount)
   }


    const [needlyPage, setNeedlyPage] = useState(0)

   const setPage = (page: number)=>{
        dispatch(actionsForPagination.setPage(page))
       setNeedlyPage((page-1)*pageCount)
   }





    useEffect(() => {
        dispatch(getAllCoin(pageCount, needlyPage))
    }, [pageCount, needlyPage])




    const handleClickCoin = (id: string) => {
        setCoinId(id)
        setFlag(true)
    }

    const handleAddCoin = (name: string, sumbol: string, priceUsd: string) => {
        console.log(name)
        // setNameCoin(name)
        dispatch(actionsWaletCrypto.addCoin(name, sumbol, priceUsd))
    }

    if (flag) {
        return <Redirect
            to={{
                pathname: "/Crypto_coin",
                state: {id: coinId}
            }}
        />
    }

    return (
        <div>
            <Container>
                {AllCoins.map(i => {
                    return <div key={nanoid()}>
                        <div
                            onClick={() => handleClickCoin(i.id)}
                        >

                            {i.name}
                        </div>

                        {/*<Checkbox*/}

                        {/*    onChange={e => handleAddCoin(i.id, i.symbol, i.priceUsd)}*/}
                        {/*>Add to</Checkbox>*/}

                        <button
                            onClick={() => handleAddCoin(i.id, i.symbol, i.priceUsd)}
                        >Add to walet
                        </button>

                        <span>{i.priceUsd} {i.symbol}</span>
                    </div>
                })
                }

                <PaginationWrapper
                    cardPacksTotalCount={pageTotalCount}
                    currentPage={currentPage}
                    pageCount={pageCount}
                    setPackPageCount={setPageCount}
                    setPackPage={setPage}
                />

                <Link to="/Crypto_wallet">Wallet</Link>
            </Container>
        </div>
    )
})

export default AllCrypto
