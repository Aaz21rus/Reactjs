import React from 'react'
import Title from './Title'
import Input from './Input'
import Btn from './Btn'

// const register = () => {alert('Работает!')} 

class FormReg extends React.Component {  
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {alert('Работает!')}

  render() {
    return (
      <form className="container">
        <Title txt="Регистрация" />
        <Input value="Введите email" name="Email" />
        <Input value="Введите пароль" name="psw" />
        <Input value="Подтвердите пароль" name="pswRepeat" />
        {/* <Btn type="submit" txt="Sign up" action={register} /> */}
        <Btn type="submit" txt="Sign up" action={this.handleClick} />
      </form>
    )
  }
}

export default FormReg