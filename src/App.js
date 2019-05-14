import React from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{
 constructor(props) {
  super(props)
  this.state = {
    newTodo: '',
    todos: [{
      key:1,
      title:'ali',
      done:false
    }]
  }
 }

 todoRemove = (index) => {
  const todos = [...this.state.todos];
  todos.splice(index, 1);    
  this.setState({
    todos
  })
}

  render(){
    const { newTodo, addTodo, todoha, valTx, chechbx, deleteTodo } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          {/* input and button */}
            <input type="text" onChange={e => newTodo(e)} />
            <button onClick={(e) => addTodo(e)}>Botton</button>
          

          
          <h2 className="alert">{valTx}</h2>
          
          {/* Ui list */}

           <ul>
            {todoha.map((todo, index) => {
              const ndex = index;
              return <li key={todo.key}>
                <input type="checkbox" onChange={index => chechbx(ndex)} value={valTx}/>
                <span style={{color: todo.done ? 'green' : 'yellow'}}>{todo.text}</span>
                <button onClick={index => deleteTodo(ndex)}>Delete</button>
              </li>
            })} 
          </ul> 

        </header>
      </div>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    todoha: state.todoha,
    valTx : state.valTx,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      newTodo : (e) => dispatch({type: 'NEW_TODO', e: e}),
      addTodo : (e) => dispatch({type: 'ADD_TODO', e:e}),
      chechbx : (index) => dispatch({type: 'CHECK_BOX', index:index}),
      deleteTodo : (index) => dispatch({type: 'DELETE_TODO', index:index}),
  }
};
App = connect(
      mapStateToProps,
      mapDispatchToProps
)(App);
