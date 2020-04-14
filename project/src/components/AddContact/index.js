import React from 'react'

class AddContact extends React.Component {

    constructor(props) {
      super(props);
        this.state = {
            name:"",
            number:""
        }
    }
    add(){
        window.fetch("http://plato.mrl.ai:8080/contacts/add", {
            method: "POST",
            headers: {"API": "diorio",
            "Content-Type": "application/json",
            "Accept":"application/json"
            },
            body: JSON.stringify({"name":this.state.name,"number":this.state.number})
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            
          //this.setState({contacts: data.Contacts});
        });
      }

    render(){
        return(
            <div>
                 <label for="name">First name:</label>
                 <input type="text" id="name" name="name" onChange={this.setState({name:this.value})}/>
                 <label for="number">Number:</label>
                 <input type="text" id="number" name="number" onChange={this.setState({number:this.value})}/>
                 <input type = "button"
                    value='Submit'
                    onClick={() => this.add()}></input>
            </div>
        );
    }

        
}
export default Contacts;