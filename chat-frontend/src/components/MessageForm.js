import React from 'react';
class MessageForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
          currentText: '' 
        };
      }
    render(){
         return (
             <div className = "form-row messageform">
                <textarea 
                    onChange = {e => {e.preventDefault();
                        this.setState({currentText: e.target.value}); 
                        this.props.onChange(e.target.value)}} 
                    placeholder = "Start writing..." 
                    value = {this.state.currentText}
                    className = "flex-fill messagetext">
                    </textarea>
                <button 
                    onClick = {e => {e.preventDefault();
                        this.setState({currentText: ''});
                        this.props.onClick(e)}} 
                    className = "btn btn-success">
                    Send
                    </button>
             </div>
             );
    }
}
export default MessageForm;