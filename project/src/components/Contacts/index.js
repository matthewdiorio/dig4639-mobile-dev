import React from 'react';

class Contacts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: "", contactCount: "", contacts: []};

  }
  componentDidUpdate(){
    this.profile()
    this.contacts()
 
  }
  componentDidMount() {
    this.contacts()
  }
  profile(){
    window.fetch("http://plato.mrl.ai:8080/profile", {headers: {API: "diorio"}})
    .then((res) => res.json())
    .then((data) => {
      this.setState({name: data.name, contactCount: data.count});
    });
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
        body: JSON.stringify({"position":0})
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        
      //this.setState({contacts: data.Contacts});
    });
  }
  add(name, number){
    window.fetch("http://plato.mrl.ai:8080/contacts/add", {
        method: "POST",
        headers: {"API": "diorio",
        "Content-Type": "application/json",
        "Accept":"application/json"
        },
        body: JSON.stringify({"name":name,"number":number})
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        
      //this.setState({contacts: data.Contacts});
    });
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
      </div>
    );
  }
}

export default Contacts;