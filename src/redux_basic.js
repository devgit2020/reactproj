const redux = require('redux');
const createStore = redux.createStore;

const objState ={
    counter : 0
};


const rootReducer = (state = objState,action) =>{

    if(action.type=='INC_INCREMENT') {
        return{
            ...state,
            counter : action.value
        }
    }

    return state;
};

const store = createStore(rootReducer);

console.log(store.getState());

store.dispatch({type:'INC_INCREMENT',value:10});

console.log(store.getState());