import * as t from "../types";

const main = (state={
    show_sidebar: false,
    token:{}
}, action)=>{
    switch(action.type){
        case t.sidebar_status:
            return{
                ...state,
                show_sidebar: action.payload
            };
        case t.token:
            return{
                ...staate,
                token: action.payload
            }
        default: 
            return {...state}
    }
}

export default main;