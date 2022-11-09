import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID= '3ad5e93a-6e2b-42ab-a148-50206123a33b';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />;
    return (
        <ChatEngine
            height = "100vh"
            projectID = {projectID}
            userName = {localStorage.getItem('username')}
            userSecret = {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

export default App;
