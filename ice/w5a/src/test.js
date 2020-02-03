class User {

    constructor(props){
        this.props = props;
    }
    printName(){
      //  console.log(this.userName);
        console.log(`${this.props.userName}, id is ${this.props.id}`);
    }
}

var myUser = new User({userName:"Jessica",id:5});
var myUser2 = new User({userName:"Amber",id:3});
var myUser3 = new User({userName:"JLucasessica",id:2});

myUser.printName();
myUser2.printName();
myUser3.printName();

function myFunction(){
    return this;
}

var objLiteral = {
    a: 5,
    b: 6,
    c: myFunction
};

