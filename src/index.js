import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Title extends React.Component {
  render() {
    return <h1 className="reg-title">{this.props.txt}</h1>
  }
}

class Input extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {content:''}
//   }

  render() {
    return (
      <div className="input-container">
        <label className="label" htmlFor="email">{this.props.value}</label>
        <input className="input" type="text" placeholder={this.props.value} name={this.props.name} id={this.props.name} required></input>
      </div>
    )
  }
}

class Btn extends React.Component {
  render() {
    return <button type={this.props.type} className="registerbtn">{this.props.txt}</button>
  }
}

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

class FormReg extends React.Component {
  render() {
    return (
      <form className="container">
        <Title txt="Регистрация" />
        <Input value="Введите email" name="Email" />
        <Input value="Введите пароль" name="psw" />
        <Input value="Подтвердите пароль" name="psw-repeat" />
        <Btn type="submit" txt="Registration" />
      </form>
    )
  }
}

class FormEnter extends React.Component {
  render() {
    return (
      <form className="container">
        <Title txt="Вход" />
        <Input value="Введите email" name="Email" />
        <Input value="Введите пароль" name="psw" />
        <Btn type="submit" txt="Enter" />
      </form>
    )
  }
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

