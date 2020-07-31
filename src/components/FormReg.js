import React from 'react'
import Title from './Title'
import Input from './Input'
import Btn from './Btn'

const register = () => {alert('Работает!')} 

class FormReg extends React.Component {  
  render() {
    return (
      <form className="container">
        <Title txt="Регистрация" />
        <Input value="Введите email" name="Email" />
        <Input value="Введите пароль" name="psw" />
        <Input value="Подтвердите пароль" name="pswRepeat" />
        <Btn type="submit" txt="Sign up" action={register} />
      </form>
    )
  }
}

export default FormReg