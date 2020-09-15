import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const Edit = () => {alert('Редактировать!')} 
const LogOut = () => {alert('Выход!')} 

class Control extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="text-center">Панель управления</h1>
          <div className="d-flex">
            <p className="mr-1">
              Email:
            </p>
            <p>
              test@test.ru
            </p>
          </div>
          <div className="d-flex">
              <p className="mr-1">
                Psw:
              </p>
              <p>
                123
              </p>
          </div>
          <p className="d-flex">
            <Button variant="primary mr-1" onClick={Edit}>Edit</Button>
            <Button variant="primary" onClick={LogOut}>Log out</Button>
          </p>
      </Jumbotron>
    )
  }
}

export default Control