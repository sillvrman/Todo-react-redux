import update from 'react-addons-update';

export const todos = (state = {valTx : '', todoha:[{text: 'ali', key:1, done: false}]}, action) => {
    switch (action.type) {
        case 'NEW_TODO' : return {...state, valTx: action.e.target.value};

        case 'ADD_TODO' :
          if (state.valTx.length < 1) {
            alert('Please enter the text...')
            return state;
          } else {
              const addTodo = {...state,
                
              todoha: [
                ...state.todoha,
                {
                  key: 1 + Math.random(),
                  text: state.valTx,
                  done: false
                }
              ]
            }
            return addTodo;
          }

          case 'CHECK_BOX': 
          console.log(state.todoha)
              const isCheck =  update(state, { 
                todoha: {
                  [action.index]: {
                    done: {$set: !state.todoha[action.index].done}
                  }
                }
              });
          
          return isCheck;

          case 'DELETE_TODO': 
         const deleteTodo = {
            ...state,
            todoha: [ // create a new data array
              ...state.todoha.slice(0, action.index), // the comments before the updated comment
              
              ...state.todoha.slice(action.index + 1) // the comments after the updated comment
            ]
          };

          return deleteTodo

        default :
            return state;
    }
};


