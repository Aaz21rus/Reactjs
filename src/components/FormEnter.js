import React from 'react'
import Title from './Title'
import Input from './Input'
import Btn from './Btn'

const enter = () => {alert('Вход!')} 

class FormEnter extends React.Component {
  render() {
    return (
      <form className="container">
        <Title txt="Вход" />
        <Input value="Введите email" name="Email" />
        <Input value="Введите пароль" name="psw" />
        <Btn type="submit" txt="Log in" action={enter} />
      </form>
    )
  }
}

export default FormEnter