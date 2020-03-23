import "./index.css";
import React from 'react';

class Card extends React.Component{


    render() {
        return(
            <div>
                <span>{this.props.content}</span>
            </div>
        );
    }
}

export default Card;