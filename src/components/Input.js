import React from 'react';
    
class Input extends React.Component {    
  render() {
    const { handleChange, value } = this.props
    return (
      <div className="input-container">
        <label className="label" htmlFor="email">{this.props.value}</label>
        <input className="input" 
          type="text" 
          onChange={ handleChange }
          name={this.props.name} 
          id={this.props.name} 
          val={value} />
      </div>
    )
  }
}

export default Input