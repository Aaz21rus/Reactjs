import React from 'react';

class Title extends React.Component {
  render() {
    return <h1 className="reg-title">{this.props.txt}</h1>
  }
}

export default Title