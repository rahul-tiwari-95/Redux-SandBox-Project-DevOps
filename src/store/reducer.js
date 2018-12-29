const initState={
    counter : 99
}

const reducer = (state = initState , action)=>{

    if(action.type === 'INCREMENT_DISPATCH'){
        return {
            ...state,
            counter: state.counter + 1

            /*
            Here, we copied the contents of state because 
            we dont want our code to undergo undesirable changes.
            Plus, Its like React DOM. 
            First copy the old state and then specify what do you need
            to change in the current state.

            */
        }

}
if(action.type === 'DECREMENT_DISPATCH'){
            
    //code
    return{
        ...state,
        counter: state.counter - 1
    }
}

if(action.type === 'ADD_DISPATCH'){
    
    //code
    return{
        ...state,
        counter: state.counter + 5
    }


};
if(action.type === 'SUB_DISPATCH'){
    
    //code
    return{
        ...state,
        counter: state.counter -5
    }


};

return state;

}

export default reducer;