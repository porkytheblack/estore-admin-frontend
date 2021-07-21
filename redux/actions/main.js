import * as t from "../types";


export const setSidebarStatus  = (status)=>dispatch=>{
    dispatch({
        type: t.sidebar_status,
        payload: status
    })
}

export const setToken  = (token_data)=>dispatch=>{
    dispatch({
        type: t.token,
        payload: token_data
    })
}