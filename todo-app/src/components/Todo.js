import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import 'materialize-css/dist/css/materialize.min.css';


export class Todo extends Component{
    


    render(){
        return(

     
    <div  style={{
        display: "flex",
        width: "550px",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        boxShadow: "1px 3px 3px #9E9E9E"
    }}>
        
    <div style={{margin: "1rem 0 0 2rem"}}  >
    <p>
      <label>
      <input id="checkbox" type="checkbox"  checked={this.props.todo.complete}  
           onChange={this.props.toggleComplete}></input>
        <span></span>
      </label>
    </p>

            { /*<input id="checkbox" type="checkbox"  checked={this.props.todo.complete}  
           onChange={this.props.toggleComplete}></input>
*/}
    </div>

    <div style={{
                textDecoration: this.props.todo.complete ? "line-through" : "",
                margin: '1rem 0 1rem 1rem',
                padding: "5px",
                width: "350px",
                display: "flex"
            }}>{this.props.children}
        </div>
        <button type="button" onClick={this.props.onDelete} className="btn-floating btn-small red" style={{
            margin: '1rem 0 1rem 1rem',
            padding: "1px",
            height: "40px",
            width: "40px",
        }}>X</button>
    </div>
       );
    }
}
export default Todo;
