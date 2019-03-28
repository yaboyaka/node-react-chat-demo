import React from 'react';
class Username extends React.Component{
    render(){
         return (
         <div className = "form-inline username">
         <label>Username: </label>
         <input onChange = {e => this.props.onChange(e.target.value)} className = "flex-fill" 
         type = 'text'  value = {this.props.username}
         placeholder = 'write here'/>
         </div>);
    }
}
export default Username;