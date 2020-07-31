import React from 'react';
    
class Input extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {content:''}
//   }
    
  render() {
    return (
      <div className="input-container">
        <label className="label" htmlFor="email">{this.props.value}</label>
        <input className="input" type="text" placeholder={this.props.value} name={this.props.name} id={this.props.name} required></input>
      </div>
    )
  }
}

export default Input