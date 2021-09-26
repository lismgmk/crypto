import {CommonActionTypeForApp, InferActionType} from "../App/store";

const initialState = {
    pageCount: 5,
    page: 1,
    pageTotalCount: 2000
};

export const paginationReducer =
    (state: initialStateType = initialState, action: CommonActionTypeForApp): initialStateType => {
        switch (action.type) {
            case "PAGINATION/SET-PAGE":
                return {...state, page: action.pack}
            case "PAGINATION/SET-PAGE-COUNT":
                return {...state, pageCount: action.pack}
            default:
                return state;
        }
    };


// actions
export const actionsForPagination = {


    setPage: (pack: number) => ({
        type: "PAGINATION/SET-PAGE",
        pack
    } as const),
    setPageCount: (pack: number) => ({
        type: "PAGINATION/SET-PAGE-COUNT",
        pack
    } as const)

};



// types
export type initialStateType = typeof initialState;
export type PaginationActionType = InferActionType<typeof actionsForPagination>;

