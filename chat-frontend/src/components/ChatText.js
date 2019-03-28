import React from 'react';
class ChatText extends React.Component{
    constructor(props) {
        super(props);
        this.txt = [];
        this.state ={
            msg: ['Welcome to the chat!'],
            createdAfter: 0
        }
    }
//GET messages from server
    async componentDidMount() {
        try {
          setInterval(async () => {
            const res = await fetch(`/message/get?createdAfter=${this.state.createdAfter}`);
            const body = await res.json();

            //It may not get any new messages
            if (res.status === 401 || body.msg.length === 0){
              return;
            }

            const newMsg = this.state.msg;
            body.msg.forEach(row => {
              newMsg.push(`${row.username} (${new Date(row.created_at).toLocaleTimeString()}): ${row.text}`);
            })
            //For the first time GET n last messages (stated on the server)
            if (this.state.createdAfter === 0){
              //In this case, gotten array must be reversed because we get last items as DESC
              //And I haven't found out better decision :(((
              newMsg.push(`Last ${newMsg.length-1} messages: `);
              newMsg.reverse();
            } 
            this.setState({
              msg : newMsg,
              createdAfter : body.createdAfter
            })
          }, 7000);
        } catch(e) {
          console.log(e);
        }
  }
//For autoscrolling down
    scrollToBottom() {
      const scrollHeight = this.messageList.scrollHeight;
      const height = this.messageList.clientHeight;
      const maxScrollTop = scrollHeight - height;
      this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
    }
    componentDidUpdate() {
      this.scrollToBottom();
    }

    render(){
         return (
             <div className = "chat" ref={(div) => {this.messageList = div;}}>
                  {this.state.msg.map(m => {return <p key={this.state.msg.indexOf(m)}>{m}</p>})}
             </div>);
    }
}
export default ChatText;