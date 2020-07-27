import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

class FormReg extends React.Component {
  render() {
    return (
      <form className="form-wraper">
        <div className="container">
          <h1 className="reg-title">Регистрация</h1>
          
          <div className="input-container">
            <label className="label" htmlFor="email">Введите Email</label>
            <input className="input" type="text" placeholder="Enter Email" name="email" id="email" required></input>
          </div>
          
          <div className="input-container">
            <label className="label" htmlFor="psw">Пароль</label>
            <input className="input" type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
          </div>
          
          <div className="input-container">
            <label className="label" htmlFor="psw-repeat">Повторите пароль</label>
            <input className="input" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required></input>
          </div>
          
          <button type="submit" className="registerbtn">Register</button>
        </div>
      </form>
    )
  }
}

class FormEnter extends React.Component {
  render() {
    return (
      <form className="container">
        <h1 className="reg-title">Вход</h1>
        
        <div className="input-container">
          <label className="label" htmlFor="email">Введите Email</label>
          <input className="input" type="text" placeholder="Enter Email" name="email" id="email" required></input>
        </div>
        
        <div className="input-container">
          <label className="label" htmlFor="psw">Пароль</label>
          <input className="input" type="password" placeholder="Enter Password" name="psw" id="psw" required></input>
        </div>
        
        <button type="submit" className="registerbtn">Вход</button>
      </form>
    )
  }
}

class Control extends React.Component {
  render() {
    return (
      <div className="control-container">
        <h1 className="reg-title">Панель управления</h1>
        
        <div className="field-container">
          <p className="name">Имя:</p>
          <p className="data">Админ</p>
        </div>
        
        <div className="field-container">
          <p className="name">Email:</p>
          <p className="data">em21@mail.ru</p>
        </div>
        
        <div className="btn-container">
          <button type="submit" className="registerbtn">Edit</button>
          <button type="submit" className="registerbtn">Log out</button>
        </div>
        
        
      </div>
    )
  }
}

class UserControl extends React.Component {
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

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <UserControl />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
