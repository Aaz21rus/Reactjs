import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

class Form extends React.Component {
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
            <input className="input" type="password" placeholder="Repeat Password" name="psw" id="psw" required></input>
          </div>
          
          <button type="submit" className="registerbtn">Register</button>
        </div>
      </form>
    )
  }
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Form />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
