import "./index.css";

class Card {
    constructor(props) {
        // Stores the argument in this.props
        this.props = props;
        // Creates a new HTML DIV element
        this.element = document.createElement("div");
        let span = document.createElement("span");
        this.element.appendChild(span);
        span.innerHTML = this.props.content;
        this.element.className = "card";
    }


    render() {
        return this.element;
    }
}

export default Card;