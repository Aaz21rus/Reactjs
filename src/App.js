import React from 'react'
import FormReg from './components/FormReg'
import FormEnter from './components/FormEnter'
import Control from './components/Control'
import { AppContext } from './context'
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
    registration = ()=> {
      alert('registration')
    }

    login = e => {
      e.preventDefault()
      alert("login")
    }

    handleChange = (e)=> {
      alert('handleChange')
      this.setState(prevState => ({
        ...prevState,
        FormReg: {
          email: e.target.value,
          psw:  e.target.value,
          pswRepeat:  e.target.value,
        }
      }))

      // (formName, formField) => ({target: {value}})
      // this.setState(prevState => ({
      //   ...prevState,
      //   [formName]: {
      //     ...prevState[formName],
      //     [formField]: value,
      //   }
      // }))
    }

    render()
    {
      const handlers = {
        registration: this.registration,
        login: this.login,
        handleChange: this.handleChange,
      }
      return (
          <AppContext.Provider value={{...this.state, handlers}}>
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
                <Route exact path="/FormReg" component={FormReg}/>
                <Route path="/FormEnter" component={FormEnter}/>
                <Route path="/Control" component={Control}/>
              </Switch>
            </Router>
          </AppContext.Provider>
      )
    }
 }

export default App
