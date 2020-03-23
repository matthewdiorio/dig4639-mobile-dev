import "./index.css"
import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h3 className="close" onClick={this.props.clicked} name={this.props.name}>x</h3>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Card;