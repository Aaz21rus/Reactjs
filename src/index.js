import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Title(props) {
  return (
    <h1 className="reg-title">{props.txt}</h1>
  )
}

function Input(props) {
  return (
    <div className="input-container">
      <label className="label" htmlFor="email">{props.value}</label>
      <input className="input" type="text" placeholder={props.value} name={props.name} id={props.name} required></input>
    </div>
  )
}

function Btn(props) {
  return(
    <button type={props.type} className="registerbtn">{props.txt}</button>
  )
}

function Field(props) {
  return(
    <div className="field-container">
      <p className="name">{props.name}</p>
      <p className="data">{props.data}</p>
    </div>
  )
}

function FormReg() {
  return(
    <form className="container">
      <Title txt="Регистрация" />
      <Input value="Введите email" name="Email" />
      <Input value="Введите пароль" name="psw" />
      <Input value="Подтвердите пароль" name="psw-repeat" />
      <Btn type="submit" txt="Registration" />
    </form>
  )
} 

function FormEnter() {
  return(
    <form className="container">
       <Title txt="Вход" />
      <Input value="Введите email" name="Email" />
      <Input value="Введите пароль" name="psw" />
      <Btn type="submit" txt="Enter" />
    </form>
  )
}

class Control extends React.Component {
  render() {
    return (
      <div className="control-container">
        <Title txt="Панель управления" />
        <Field name="Имя:" data="Админ" />
        <Field name="Email:" data="em21@mail.ru" />
        <div className="btn-container">
          <Btn type="" txt="Edit" />
          <Btn type="" txt="Log out" />
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
  <UserControl />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
