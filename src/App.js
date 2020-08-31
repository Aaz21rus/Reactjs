import React from 'react'
import FormReg from './components/FormReg'
import FormEnter from './components/FormEnter'
import Control from './components/Control'
import { AppContext } from './context' // почему  {}
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
    
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
      Control: [
        {
          email: 'test@test.ru',
          psw: '123',
          isAuth: false,
        },
        {
          email: 'test2@test.ru',
          psw: '123',
          isAuth: false,
        }
      ]
    }
  }

  registration = e => {
    e.preventDefault()
    const {
      FormReg: { email, psw, pswRepeat }, 
      Control
    } = this.state

    let controlEmail = Control.forEach(item => {
      if (item === email) {
        return item.email
      }
    })

    switch (email) {
      case '':
      return alert('Registration failed')
      break
    }
    return alert('Registration complite')

    // if (email !== null) {
    //   if (!Control.some(item => item.email === email)) {
    //     if (psw === pswRepeat) {
    //       return (
    //         alert('Registration complite'),
    //         Control.push(
    //           {
    //             email: email,
    //             psw: psw,
    //             isAuth: false,
    //           }
    //         ),
    //        console.log(Control)
    //         // <Redirect to="/Control"/>
    //
    //           // () => console.log('Registration faled')
    //           // this.setState(
    //           // (prevState) => ({
    //           //   ...prevState,
    //           // Control: { isAuth: true },
    //           // }
    //
    //       )
    //     }
    //   }
    // }

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
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/FormReg">FormReg</Link>
              </li>
              <li>
                <Link to="/FormEnter">FormEnter</Link>
              </li>
              <li>
                <Link to="/Control">Control</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/FormReg" component={ FormReg } />
            <Route path="/FormEnter" component={ FormEnter } />
            <Route path="/Control" component={ Control } />
          </Switch> 
        </Router>
      </AppContext.Provider>
    )
  }
}

export default App