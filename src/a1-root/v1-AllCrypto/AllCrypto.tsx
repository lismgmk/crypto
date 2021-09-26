import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../App/store";
import {actionsMainCrypto, getAllCoin} from "../../Redusers/MainCryptoReduser";
import {Redirect} from "react-router-dom";
import {PaginationWrapper} from "../common/Pagination/PaginationWrapper";
import {actionsForPagination} from "../../Redusers/paginationReduser";
import {ErrorWindow} from "../common/Error/ErrorWindow";
import {Preloader} from "../common/Preloader/Preloader";
import {TableList} from "./TablePackList/TableList";
import s from "./AllCrypto.module.scss";

const AllCrypto = React.memo(() => {
    const dispatch = useDispatch();

    let loader = useSelector<AppRootStateType, boolean | null>(state => state.allCrypto.loader)
    const [coinId, setCoinId] = useState<string>('')
    const [flag, setFlag] = useState<boolean>(false)


    const pageTotalCount = useSelector<AppRootStateType, number>(state => state.pagination.pageTotalCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.pagination.page)
    const pageCount = useSelector<AppRootStateType, number>(state => state.pagination.pageCount)
    const error = useSelector<AppRootStateType, string | null>(state => state.allCrypto.error)


    const setPageCount = (page: number) => {
        dispatch(actionsForPagination.setPageCount(page))
    }


    const [needlyPage, setNeedlyPage] = useState(0)
    const [addModal, setAddModal] = useState(false);
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

    if (flag) {
        return <Redirect
            to={{
                pathname: "/Crypto_coin",
                state: {id: coinId}
            }}
        />
    }

    return (


        <div className={s.container}>
            <div className={s.wrapper}>
                <TableList setCoinId={setCoinId} setFlag={setFlag}/>

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
