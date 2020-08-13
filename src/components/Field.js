import React from 'react';
    
class Field extends React.Component {
  render() {
    return (
      <div className="field-container">
        <p className="name">{this.props.name}</p>
        <p className="data">{this.props.data}</p>
      </div>
    )
  }
}

export default Field