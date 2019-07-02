import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
    //state = {  }
    render() { 
        return ( 
            <div className="message">
                <span className="message__author">
                    {this.props.message.userName}
                </span>
                {this.props.message.message}
            </div>
         );
    }
}
 
export default Message;