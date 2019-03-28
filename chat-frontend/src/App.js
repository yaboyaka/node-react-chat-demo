import React from 'react';
import Username from './components/Username';
import ChatText from './components/ChatText';
import Users from './components/UsersList';
import MessageForm from './components/MessageForm';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      username: 'anonymus',
      message: '' 
    };
    this.changeUsername = this.changeUsername.bind(this)
    this.changeMessage = this.changeMessage.bind(this)
  }
  changeUsername(newName) {
    this.setState({
      username: newName,
      message: this.state.message
    });
  }
  changeMessage(newMessage) {
    this.setState({
      username: this.state.username,
      message: newMessage
    });
  }
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/message/post', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username: this.state.username,
        message: this.state.message
      }),
    });
  };
  render(){
    return <div className = "wrapper">
      
      <div className = "container">
        
        <div className = "row">
          <div className = "col-sm-9">
            <Username onChange={this.changeUsername} username = {this.state.username}/>
            <ChatText msg = {this.state.message} usr = {this.state.username}/>
            <MessageForm onChange={this.changeMessage} onClick = {this.handleSubmit}/>
          </div>
          <div className = "col-sm-3 users">
            <Users/>
          </div>
        </div>
      </div>
    </div>
  }
}
export default App;
