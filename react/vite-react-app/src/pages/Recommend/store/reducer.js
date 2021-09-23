import { actionCreator } from "."

let defaultState={
    bannerList:[]
}
export default(state=defaultState,action)=>{
    switch(action.type){
        case"CHANGE_BANNER":
        return{
            ...state,
            bannerList:action.data
        }
        //return state.bannerList= action.data;
        default:
            return state
    }
}
