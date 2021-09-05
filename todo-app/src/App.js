import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from './components/TodoForms';
import Todo from './components/Todo';
class App extends React.Component {

  state = {
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true,

  }

  addTodo = (todo) => {
    if(todo.text===''){
     
     return(
       <span>please enter some text</span>
     )
    }else{

    this.setState({
      todos: [todo, ...this.state.todos]
    });
  }
  }

  handleDeleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }));
  };

  changeEditMode = id => {
    this.setState(state => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isInEditMode: !this.state.isInEditMode
          }
        } else {
          return todo;
        }
      }),

    }))
    console.log("change to edit mode");
  }


  saveEdit = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            text: this.refs.theTextinput.value,
            isInEditMode: false
          }
        } else {
          return todo;
        }
      })
    })

  }

  updateTodoShow = (s) => {
    this.setState({
      todoToShow: s
    })
  }

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,

          }
        } else {
          return todo;
        }
      })
    })
  }


  removeAllTodosThatAreComplete = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.complete)
    })
  }


  render() {
    let todos = [];

    console.log("hello to todos app");
    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter(todo => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter(todo => todo.complete);
    }
    return (
    <div className="border border-dark rounded App" style={{
        margin: '3rem 300px 1rem 300px',
        boxShadow: "3px 5px 5px #9E9E9E",
        height: "auto"
      }}>
      
      <h1>Add Tasks to your Todo list</h1>
        <TodoForm onSubmit={this.addTodo} />{todos.map((todo) => (
          <Todo  key={todo.id} toggleAllComplete={this.state.toggleAllComplete}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo} >

            {todo.isInEditMode ?

              <input className="m-2" name="text" ref="theTextinput" defaultValue={todo.text}></input>
              :
              <div onDoubleClick={() => this.changeEditMode(todo.id)}>{todo.text}</div>}

            {todo.isInEditMode ? <button className="waves-effect waves-light blue btn-small  m-3"
              onClick={() => this.saveEdit(todo.id)}>save</button> : null}
          </Todo>
        ))}


        <div className="ui blue buttons m-3">
          active todos {this.state.todos.filter(todo => !todo.complete).length}
          <button className="ui button" onClick={() => this.updateTodoShow("all")}>all</button>
          <button className="ui button" onClick={() => this.updateTodoShow("active")}>active</button>
          <button className="ui button" onClick={() => this.updateTodoShow("complete")}>complete</button>
          <button className="ui button"
            onClick={() =>
              this.setState(state => ({
                todos: state.todos.map(todo => ({
                  ...todo,
                  complete: state.toggleAllComplete
                })),
                toggleAllComplete: !state.toggleAllComplete
              }))}>
            Mark all as complete:
          </button>
          {this.state.todos.some(todo => todo.complete) ? (
          <button className="ui button" onClick={this.removeAllTodosThatAreComplete}>remove all complete todos</button>
      ) : null}
          </div>
      </div>
    );
  }
}


export default App;
