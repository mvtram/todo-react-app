import React, { Component } from 'react';
import '../components/TodoForms.css';
import shortid from 'shortid';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import 'materialize-css/dist/css/materialize.min.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '',showError: false };
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },()=>{
       // console.log(event);
      }
    )
  }

  handleSubmit = event => {
  
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
      isInEditMode: false
    });
    this.setState({
      text: ""
    });

    
  };





  render() {
 
    return (
      <div className="row">
    
      <form  className="col s12" onSubmit={this.handleSubmit}>
        <div className="row">
        <div className="input-field col s3">
   
        
        <input  style={{width: "500px"}} name="text" value={this.state.text}onChange={this.handleChange}>
        </input>
        {
          this.state.text===""&&this.state.showError ? <div>invalid input</div>:null
        }
     <button className="btn-floating btn-large blue  m-2" onClick={this.handleSubmit}>
              <MaterialIcon icon="add" color="white"/>
      </button>
    
      </div>
      </div>
      </form>
      </div>

    );
  }
}

export default TodoForm;