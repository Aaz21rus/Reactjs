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
  Redirectб,
  useHistory
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showControl: false,
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
      ],
      Alert: {  }
    }
  }

    registration = (e) => {
      e.preventDefault()
      const controlEmail = this.state.Control.map(({email}) => email)
      const { FormReg: {email, psw, pswRepeat} } = this.state
      const repeatEmail = controlEmail.find(item => item === email)

      switch (email) {
        case "":
          alert('empty string')
          break
        case repeatEmail:
          alert('email exist')
          break
      }
      switch (true) {
        case (psw === ""):
          alert('empty string')
          break
        case (psw !== pswRepeat):
          alert('incorrect pswRepeat')
          break
      }
      // switch (pswRepeat) {
      //   case "":
      //     alert('empty string')
      //     break
      //   default:
      //     return this.render( <Control /> )
      // }

      this.state.Control.push({email,psw,isAuth:true})
      console.log(this.state)
      let history = useHistory()
      history.push('./components/Control')
    }

    login = e => {
      e.preventDefault()
      console.log(this.state)
    }

    handleChange = e => {
      e.persist()
      this.setState((prevState) => ({
        ...prevState,
        FormReg: {
          ...prevState.FormReg,
          [e.target.name]: e.target.value,
        }
      }))
    }

    handleChange2 = e => {
      e.persist()
      this.setState((prevState) => ({
        ...prevState,
        FormEnter: {
          ...prevState.FormEnter,
          [e.target.name]: e.target.value,
        }
      }))
    }

      // (formName, formField) => ({target: {value}})
      // this.setState(prevState => ({
      //   ...prevState,
      //   [formName]: {
      //     ...prevState[formName],
      //     [formField]: value,
      //   }
      // }))

    edit = () => {alert('Редактировать!')}

    logOut = () => {alert('Выход!')}

  render()
    {
      // const isAuth = this.state.Control.find(item => item.isAuth === true)
      // console.log(isAuth)
      // let control
      // if(isAuth) {
      //   control = <Control />
      // }
      const handlers = {
        registration: this.registration,
        login: this.login,
        handleChange: this.handleChange,
        handleChange2: this.handleChange2,
        edit: this.edit,
        logOut: this.logOut
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
