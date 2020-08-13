import React from 'react';
    
class Btn extends React.Component {
  render() {
    return <button type={this.props.type} className="registerbtn" onClick={this.props.action}>{this.props.txt}</button>
  }
}

export default Btn