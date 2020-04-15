import React from 'react';

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
        
      <div>
        <h1>Name:{this.state.name} Contact Count: {this.state.contactCount}</h1>

       { 
         this.state.contacts.map((value, index) => {
           return(
            <div key={index+"div"}>
                <h3 key={index+"h3"}>{value.name}</h3>
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
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Name:</label>
          <input
            type="text"
            
            onChange={this.handleNameChange}
            required
         />
          <label>Number:</label>
            <input
            type="text"
            onChange={this.handleNumberChange}
            required
         />
          <input type = "submit"
            value='Add Contact'
            ></input>
        
        </form>
      </div>
    );
  }
}

export default Contacts;