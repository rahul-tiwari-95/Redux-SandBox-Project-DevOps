const redux = require('redux');
const createStore = redux.createStore;

const initState = {
    counter : 0
}

//reducers
const rootReducer = (state  = initState, action)=>{
    
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        };  
    }
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.payload.value
        };  
    }
    if(action.type == 'SUB_COUNTER'){
        return{
            ...state,
            counter: state.counter - 100
        };
    }

    return state; 

}


//store
const store = createStore(rootReducer);
// console.log(store.getState());

//Subscription model

store.subscribe(()=>{
    console.log('Subscription' , store.getState())
})

//dispatching actions

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'SUB_COUNTER'})
store.dispatch({type:'ADD_COUNTER' , payload:{
    value:10
}});
// console.log(store.getState());

