const initState={
    counter : 90,
    results: []
}

const reducer = (state = initState , action)=>{


    switch(action.type){

        case 'INCREMENT_DISPATCH':
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

        case 'DECREMENT_DISPATCH':
                    //code
                return{
                    ...state,
                    counter: state.counter - 1
                }


        case 'STORE_DISPATCH':
                
                return{
                    ...state,
                    results: state.results.concat({ id: new Date() , value:state.counter})
                }


        case 'ADD_DISPATCH':

                return{
                    ...state,
                    counter: state.counter + action.value
                }


        case 'SUB_DISPATCH':
                return{
                    ...state,
                    counter: state.counter -5
                }

    }



return state;

}

export default reducer;