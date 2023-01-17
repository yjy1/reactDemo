/* 
    该文件专门为Count组件生成action对象 
*/
/* 
    同步action，就是指action的值为object类型的一般对象
*/
import {INCREMENT,DECREMENT,INCREMENT4ODD,INCREMENTASYNC} from './constant'
import store from './store'
export function createIncrementAction(data){
    return { type: INCREMENT, data }
}
export function createDecrementAction(data){
    return {type: DECREMENT,data }
}
export function createIncrement4OddAction(data){
    return {type:INCREMENT4ODD,data }
}
/* 
    异步的action，就是指action的值为函数,异步action中一般会调用同步action
    PS:异步action不是必须要用的
*/
export const createIncrementAsyncAction = (data,time)=>{
    // return {type:INCREMENTASYNC,data }
    console.log('store.dispatch',store);
    return (dispatch)=>{
        console.log('dispatch..',dispatch);
        setTimeout(() => {
            dispatch({type:INCREMENT,data})
        }, time);
    }
}