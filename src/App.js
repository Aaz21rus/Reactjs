import React from 'react';
import FormReg from './components/FormReg'
import FormEnter from './components/FormEnter'
import Control from './components/Control'
    
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      FormReg: {
        email: '',
        psw: '',
        pswRepeat: '',
      },
    }
  }

  render () {
    return (
      <div>
        <FormReg />,
        <FormEnter />,
        <Control />
      </div>
    )
  }
}

export default App