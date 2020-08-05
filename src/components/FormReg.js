import React from 'react'
import Title from './Title'
import Input from './Input'
import Btn from './Btn'

// const register = () => {alert('Работает!')} 

class FormReg extends React.Component {  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      email: '',
      psw: ''
    }
  }

  handleClick(event) {
    alert(this.state.value)
    event.preventDefault()
  }

  handleUserInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({[name]: value})
  }

  render() {
    return (
      <form className="container">
        <Title txt="Регистрация" />
        <Input value="Введите email" name="Email" fieldType={this.state.email} onChange={this.handleUserInput} />
        <Input value="Введите пароль" name="psw" fieldType={this.state.psw} onChange={this.handleUserInput} />
        <Input value="Подтвердите пароль" name="pswRepeat" />
        {/* <Btn type="submit" txt="Sign up" action={register} /> */}
        <Btn type="submit" txt="Sign up" action={this.handleClick} />
      </form>
    )
  }
}

export default FormReg