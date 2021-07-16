import * as t from "../types";


export const setSidebarStatus  = (status)=>dispatch=>{
    dispatch({
        type: t.sidebar_status,
        payload: status
    })
}