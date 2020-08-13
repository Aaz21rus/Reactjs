import React from 'react'
import Title from './Title'
import Input from './Input'
import Btn from './Btn'
import { AppContext } from '../context'

class FormEnter extends React.Component {
  render() {
    const { FormEnter: { email, psw }, handlers: { login, handleChange } } = this.context
    return (
      <form className="container">
        <Title txt="Вход" />
        <Input 
          value="Введите email" 
          name="Email" 
          handleChange={ handleChange('FormEnter', 'email') }
          val={ email }
        />
        <Input 
          value="Введите пароль" 
          name="psw" 
          handleChange={ handleChange('FormEnter', 'psw') }
          val={ psw }
        />
        <Btn 
          type="submit" 
          txt="Log in" 
          action={ login } 
        />
      </form>
    )
  }
}

FormEnter.contextType = AppContext

export default FormEnter