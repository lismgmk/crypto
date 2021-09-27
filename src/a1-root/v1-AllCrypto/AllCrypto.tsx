import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {actionsMainCrypto, getAllCoin} from "../../Redusers/MainCryptoReduser";
import {Redirect} from "react-router-dom";
import {PaginationWrapper} from "../common/Pagination/PaginationWrapper";
import {actionsForPagination} from "../../Redusers/paginationReduser";
import {ErrorWindow} from "../common/Error/ErrorWindow";
import {Preloader} from "../common/Preloader/Preloader";
import {TableList} from "./TableList/TableList";
import s from "./AllCrypto.module.scss";
import {H2} from "../common/Headings/H2";

const AllCrypto = React.memo(() => {
    const dispatch = useDispatch();

    let loader = useSelector<AppRootStateType, boolean | null>(state => state.allCrypto.loader)
    const [coinId, setCoinId] = useState<string>('')
    // const [flag, setFlag] = useState<boolean>(false)


    const pageTotalCount = useSelector<AppRootStateType, number>(state => state.pagination.pageTotalCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.pagination.page)
    const pageCount = useSelector<AppRootStateType, number>(state => state.pagination.pageCount)
    const error = useSelector<AppRootStateType, string | null>(state => state.allCrypto.error)
    const oneMainCoin = useSelector<AppRootStateType, string>(state => state.coinCrypto.oneMainCoin)


    const setPageCount = (page: number) => {
        dispatch(actionsForPagination.setPageCount(page))
    }


    const [needlyPage, setNeedlyPage] = useState(0)
    const setPage = (page: number) => {
        dispatch(actionsForPagination.setPage(page))
        setNeedlyPage((page - 1) * pageCount)
    }

    useEffect(() => {
        let int = setTimeout(() => {
            dispatch(actionsMainCrypto.setError(null))
        }, 3000)
        return () => clearTimeout(int)
    }, [error])

    useEffect(() => {
        dispatch(getAllCoin(pageCount, needlyPage))
    }, [pageCount, needlyPage])

    if (loader) {
        return <Preloader/>
    }

    if (oneMainCoin !== '') {
        return <Redirect to={"/Crypto_coin"}

        />
    }

    return (
        <div className={s.container}>
            <H2>All coins</H2>
            <div className={s.wrapper}>

                <TableList/>

                {error && <ErrorWindow errorMessage={error}/>}
                <PaginationWrapper
                    cardPacksTotalCount={pageTotalCount}
                    currentPage={currentPage}
                    pageCount={pageCount}
                    setPackPageCount={setPageCount}
                    setPackPage={setPage}
                />
            </div>
        </div>
    )
})

export default AllCrypto
