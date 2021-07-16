import * as t from "../types";

const main = (state={
    show_sidebar: false
}, action)=>{
    switch(action.type){
        case t.sidebar_status:
            return{
                ...state,
                show_sidebar: action.payload
            };
        default: 
            return {...state}
    }
}

export default main;