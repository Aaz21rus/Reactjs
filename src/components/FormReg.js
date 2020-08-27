import React from 'react'
import Title from './Title'
import Input from './Input'
import Btn from './Btn'
import { AppContext } from '../context'
import FormEnter from './FormEnter'

class FormReg extends React.Component {  
  render() {
    const { FormReg: {email, psw, pswRepeat}, handlers: { registration, handleChange } } = this.context // название const {}
    return (  
      <form className="container">
        <Title txt="Регистрация" />
        <Input 
          value="Введите email" 
          name="Email"
          handleChange={handleChange('FormReg', 'email')}
          val={email} 
        />
        <Input 
          value="Введите пароль" 
          name="psw"
          handleChange={handleChange('FormReg', 'psw')} 
          val={psw} 
        />
        <Input 
          value="Подтвердите пароль" 
          name="pswRepeat"
          handleChange={handleChange('FormReg', 'pswRepeat')} 
          val={pswRepeat} 
        />
        <Btn type="submit" txt="Sign up" action={registration} />
      </form>
    )
  }
}

FormReg.contextType = AppContext

export default FormReg