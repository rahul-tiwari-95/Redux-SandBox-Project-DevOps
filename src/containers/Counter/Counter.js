import React, { Component } from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 500" clicked={this.props.onAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSub}  />
                <hr/>

                <button name="Result" onClick={this.props.onStore} >Store Result </button>
                <ul>
                    {this.props.storedResults.map(tempResults =>{

                            <li key={tempResults.id} onClick={()=>this.props.onDelete(tempResults.id)}> 
                                
                                {tempResults.value}
                                {console.log(tempResults.value)}
                            </li>
                            

                    })}
                    <li>
                        <p>Hey</p></li>
                </ul>
                    
            </div>
        );
    }
}

const mapStateToProps = state =>{

    return{
        
        ctr: state.counter,
        storedResults: state.results

    };
};

const mapDispatchToProps = dispatch =>{

    return { //Its a JS Styled Object. Use , and not ;
        onIncrementCounter: () =>{dispatch({type: 'INCREMENT_DISPATCH'})},//Declaring dispatch function
        onDecrementCounter: () =>{dispatch({type: 'DECREMENT_DISPATCH'})},
        onAdd: () =>{dispatch({type: 'ADD_DISPATCH' , value:500})},
        onSub: () =>{dispatch({type: 'SUB_DISPATCH'})},
        onStore: () =>{dispatch({type: 'STORE_DISPATCH'})},
        onDelete: (id) =>{dispatch({type: 'DELETE_DISPATCH' , resultID:id})},
      


    };
};


export default connect(mapStateToProps , mapDispatchToProps)(Counter);

/*
    You can leave the first arguement of connect empty if your code doesn't want to update 
    the State but it needs ti dispatch or trigger some functions or events.
    So, You can keep the first arguement null if needed
*/