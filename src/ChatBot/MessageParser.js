import React, { useEffect } from "react";
import Axios from "axios";
import Config from '../Config';

const MessageParser = ({ children, actions }) => {

    useEffect(() => {
        Axios.post(`${Config.IP}/chat/update`, { ...children.props.state, email:sessionStorage.getItem('email')})
            
    }, [children.props.state])

    const parse = (Message) => {
        const message = Message.toLowerCase();

        if (message.includes('hi') || message.includes('hellow')) {
            actions.handleHello();
        } else if (message.includes('project')) {
            actions.handleAboutProject();
        } else if (message.includes('shiva')) {
            actions.handleAboutShiva();
        } else if (message.includes('me') || message.includes('u')) {
            actions.handleAboutMe();
        }
        else {
            actions.handleAllmsg();
        }
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions,
                });
            })}
        </div>
    );
};

export default MessageParser;