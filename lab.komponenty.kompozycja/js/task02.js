import ReactDOM from 'react-dom';
import React, { Component } from 'react';

function App() {
     return <Chat />;
}

function Chat() {
     return (
          <div className="chat">
               <ChatHeader />
               <ChatMessanges />
               <NewChatMessange />
          </div>
     );
}

function ChatHeader() {
     return (
          <header>
               <h1>Chat prywatny</h1>
          </header>
     );
}

function ChatMessanges() {
     return (
          <>
               <ChatMessage />
          </>
     );
}

function ChatMessage() {
     return (
          <ul>
               <li>Wpis z Chatu 1</li>
               <li>Wpis z Chatu 2</li>
               <li>Wpis z Chatu 3</li>
          </ul>
     );
}

function NewChatMessange() {
     return (
          <footer>
               <input type="text" placeholder="New message" />
               <button>Wyślij</button>
          </footer>
     );
}

ReactDOM.render(<App />, document.getElementById('app'));

export { Chat, App };
