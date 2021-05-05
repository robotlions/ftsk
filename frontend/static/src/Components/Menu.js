import React, {Component} from 'react';
import Cookies from "js-cookie";

class Menu extends Component {
  constructor (props){
        super(props);
        this.state = {
          isLoggedIn: !!Cookies.get("Authorization"),
          data: [],
          editWindow: "",
          isEditing: false,
          editText: "",
    
        }
      this.editArticle = this.editArticle.bind(this);
      this.submitEdit = this.submitEdit.bind(this);
      this.handleInput = this.handleInput.bind(this);
      }

      componentDidMount(){
        fetch("/menuitems/")
          .then(response => response.json())
          .then(response => this.setState({data: response}));
                }

                handleInput(event){
                  this.setState({[event.target.name]: event.target.value});
                }

                editArticle(data){
                  this.setState({editWindow: data.id})
                  this.setState({isEditing: true})
                  this.setState({id: data.id, description: data.description, name: data.name, price: data.price, vegan: data.vegan, vegetarian: data.vegetarian})
                }

                async submitEdit(edit){
                  let formData = new FormData();
                  for(var prop in edit) {
                    formData.append(prop, this.state[prop]);
                  }
                  formData.delete('image')
                  // e.preventDefault();
                  // edit.image = this.state.image
                  // edit.description = this.state.description
                  // edit.name = this.state.name
                  // edit.price = this.state.price
                  // edit.vegan = this.state.vegan
                  // edit.vegetarian = this.state.vegetarian
                  this.setState({isEditing: false})
                  const options = {
                    method: 'PUT',
                    headers: {
                      // "Content-Type": "application/json",
                      'X-CSRFToken': Cookies.get('csrftoken'),
                    },
                    // body: JSON.stringify(edit),
                    body: formData,
                  };
                  const handleError = (err) => console.warn(err);
                  const response = await fetch(`/menuitems/edit/${edit.id}/`, options);
                  await response.json().catch(handleError);
                }

        render(){

          const menuList = this.state.data.map((data) => this.state.isEditing === true && this.state.editWindow === data.id ? <form key={data.id}>
            
            Name:<input value={this.state.name} name="name" onChange={this.handleInput}/><br/>
            Price:<input value={this.state.price} name="price" onChange={this.handleInput}/><br/>
            Description:<textarea className="form-control" rows="5" type="text" value={this.state.description} name="description" onChange={this.handleInput}/><br/>
            Vegan y/n:<input value={this.state.vegan} name="vegan" onChange={this.handleInput}/><br/>
            Vegetarian y/n:<input value={this.state.vegetarian} name="vegetarian" onChange={this.handleInput}/><br/>
          <button onClick={()=> this.submitEdit(data)}>Submit Edit</button>
          </form> : (
            <section className="menuCard" key={data.id}>
              {data.image ? <img style={{minWidth: "100%", maxWidth: "100%", borderRadius: "3px"}} src={data.image} alt="menu item"/> : null}
            <h4 style={{paddingTop: "1vh"}}>{data.name} - ${data.price}</h4>
            <p>{data.description}</p>
            <p>Vegan: {data.vegan}  | Vegetarian: {data.vegetarian}</p>
            {this.state.isLoggedIn ? <><button onClick={() => this.editArticle(data)}>Edit</button> <button>Delete</button></> : null}
            {this.state.isEditing === true && this.state.editWindow === data.id ? <p><textarea className="form-control" rows="5" type="text" name="editText" value={this.state.editText} onChange={this.handleInput}/><button className="btn" onClick={()=> this.submitEdit(data)}>Submit Edit</button></p> : null}
            </section>
          ))
  return(
    <div>
       {menuList}
    </div>
  );
}
}
export default Menu;