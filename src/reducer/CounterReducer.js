export function CounterReducer (state,payload){
    switch(payload.action)
    {
        case 'INCREMENT':return {
            value : state.value+1
        }
        case 'DECREMENT':return {
            value : state.value-1
        }
        default:return {
            value : 0
        }
    }
}