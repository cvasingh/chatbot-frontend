import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. How can i help you.');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const handleAllmsg = () => {
        const allMessage = createChatBotMessage(`I can only answer this: About the project? About Shiva(developer) About me?`)

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, allMessage],
        }));
    };

    const handleAboutProject = () => {
        const aboutProject = createChatBotMessage(`...details about project...`)

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, aboutProject],
        }));
    };
    const handleAboutShiva = () => {
        const aboutShiva = createChatBotMessage(`...details about Shiva...`)

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, aboutShiva],
        }));
    };
    const handleAboutMe = () => {
        const aboutMe = createChatBotMessage(`I'm chatbot developed by Shiva`)

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, aboutMe],
        }));
    };
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: { handleHello, handleAllmsg, handleAboutProject, handleAboutShiva, handleAboutMe },
                });
            })}
        </div>
    );
};

export default ActionProvider;