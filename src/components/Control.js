import React from 'react'
import Title from './Title'
import Field from './Field'
import Btn from './Btn'

const Edit = () => {alert('Редактировать!')} 
const LogOut = () => {alert('Выход!')} 

class Control extends React.Component {
  render() {
    return (
      <div className="control-container">
        <Title txt="Панель управления" />
        <Field name="Имя:" data="Админ" />
        <Field name="Email:" data="em21@mail.ru" />
        <div className="btn-container">
          <Btn type="" txt="Edit" action={Edit} />
          <Btn type="" txt="Log out" action={LogOut} />
        </div>
      </div>
    )
  }
}

export default Control