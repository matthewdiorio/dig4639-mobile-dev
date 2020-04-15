import React from 'react';
import styles from './index.css'

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: "", contactCount: "", contacts: [], refresh:true};

  }

  componentDidMount() {
    this.profile()
    this.contacts()
  }
  profile(){
    window.fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "diorio"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState(
        {
          name: data.name, 
          contactCount: data.count,
          addName: "",
          addNumber: "",
        });
    });
  }
  update(){
    this.contacts()
    this.profile()
  }
  contacts(){
    window.fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "diorio"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({contacts: data.contacts});
    });
  }
  remove(position){
    window.fetch("http://plato.mrl.ai:8080/contacts/remove", {
        method: "POST",
        headers: {"API": "diorio",
        "Content-Type": "application/json",
        "Accept":"application/json"
        },
        body: JSON.stringify({"position":position})
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        
      this.update()
    });
  }
  add(){
    window.fetch("http://plato.mrl.ai:8080/contacts/add", {
        method: "POST",
        headers: {"API": "diorio",
        "Content-Type": "application/json",
        "Accept":"application/json"
        },
        body: JSON.stringify({"name":this.state.addName,"number":this.state.addNumber})
    })
    .then((res) => res.json())
    .then((data) => {
        this.update()
        
      //this.setState({contacts: data.Contacts});
    });
  }
  handleNameChange = (event) => {
    this.setState({addName: event.target.value});
  }
  handleNumberChange = (event) => {
    this.setState({addNumber: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
    this.add();
}

  render() {
    return (
        
      <div className="container">
        <div className="heading">
          <h1>Name: {this.state.name}</h1>
          <h2>Contact Count: {this.state.contactCount}</h2>
       </div>
        { 
         this.state.contacts.map((value, index) => {
           return(
            <div className="contact" key={index+"div"}>
                <h4 key={index+"h3"}>{value.name}</h4>
                <p key={index+"p"}>{value.number}</p>
                <input type = "button"
                    value='Delete'
                    key={index}
                    className = "answerButton"
                    onClick={() => this.remove(index)}></input>
            </div>
             );
           })
         }
       <br />
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="input">
              <label>Name:</label>
              <input
                type="text"
                
                onChange={this.handleNameChange}
                required
              />
           </div>
           <div className="input">
            <label>Number:</label>
              <input
              type="text"
              onChange={this.handleNumberChange}
              required
             />
            </div>
          <br />
          <input type = "submit"
            value='Add Contact'
            ></input>
        
        </form>
      </div>
    );
  }
}

export default Contacts;