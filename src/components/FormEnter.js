import React from 'react'
import { AppContext } from '../context'
import {Form} from "react-bootstrap";
import Button from "react-bootstrap/Button";

class FormEnter extends React.Component {
  render() {
    const { FormEnter: { email, psw }, handlers: { login, handleChange2 } } = this.context
    return (
      <Form className="p-3 border">
        <h2 className="text-center">Вход</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={ handleChange2 } value={email} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="psw" onChange={ handleChange2 } value={psw} />
        </Form.Group>
        <Button variant="primary" type="submit" block onClick={login}>
          Submit
        </Button>
      </Form>
    )
  }
}

FormEnter.contextType = AppContext

export default FormEnter
