import React, { Fragment } from 'react';
import FormReg from './components/FormReg'
import FormEnter from './components/FormEnter'
import Control from './components/Control'
import { AppContext } from './context' // почему  {}


    
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      FormReg: {
        email: '',
        psw: '',
        pswRepeat: '',
      },
      FormEnter: {
        email: '',
        psw: '',
      },
      Control: {
        email: 'test@test.ru',
        psw: '123',
        isAuth: false,
      }
    }
  }

  registration = e => {
    e.preventDefault()
    const { 
      FormReg: { email, psw }, 
      Control 
    } = this.state
    if (email === Control.email && psw === Control.psw) {
      return this.setState(
        (prevState) => ({ // скобки
          ...prevState,
          Control: { isAuth: true },
        }), 
        () => console.log('Registration complite')
      )
    }
    return alert('Invalid Registration') 
  }

  login = e => {
    e.preventDefault()
    const {
      FormEnter: { email, psw },
      Control
    } = this.state
    if (email === Control.email && psw === Control.psw) {
      return this.setState(
        (prevState) => ({
          ...prevState,
          Control: { isAuth: true },
        }),
        () => console.log('login complite')
      )
    }
    return alert('Invalid Login')
  }

  handleChange = (formName, formField)=> ({ target: { value } })=> {
    this.setState(prevState => ({
      ...prevState,
      [formName]: {
        ...prevState[formName],
        [formField]: value,
      }
    }))
  }
  
  render () {
    const handlers = {
      registration: this.registration,
      login: this.login,
      handleChange: this.handleChange,
    }
    return (
      <AppContext.Provider value={{ ...this.state, handlers }}>
        {!this.state.Control.isAuth ? (
          <Fragment>
            <FormReg />,
            <FormEnter />,      
          </Fragment>
        ) : (
          <Control />
        )}      
      </AppContext.Provider>
    )
  }
}

export default App