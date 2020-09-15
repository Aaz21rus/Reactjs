import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { AppContext } from '../context'

class Control extends React.Component {
  render() {
    const { handlers: { edit, logOut } } = this.context
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
            <Button variant="primary mr-1" onClick={edit}>Edit</Button>
            <Button variant="primary" onClick={logOut}>Log out</Button>
          </p>
      </Jumbotron>
    )
  }
}

Control.contextType = AppContext

export default Control