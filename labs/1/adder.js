class Adder {
    constructor(props) {
      this.props = props;
    }
  
    sum(){
       let mySum = (this.props.a + this.props.b);
       return mySum;
    }
 
    render() {
       this.sum();
       return `<p> the sum of a and b is ${this.sum()}</p>`;
     }
  }
  
  module.exports = Adder;
 