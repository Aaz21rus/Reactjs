import React from 'react'
import Button from 'react-bootstrap/Button'
import { AppContext } from '../context'
import { Form } from "react-bootstrap"

class FormReg extends React.Component {
  render() {
    const { FormReg: {email, psw, pswRepeat}, handlers: { registration, handleChange } } = this.context // название const {}
    return (
      <Form className="p-3 border">
        <h2 className="text-center">Регистрация</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={ handleChange } val={email} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="psw" onChange={ handleChange } val={psw} />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordRepeat">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="pswRepeat" onChange={ handleChange } val={pswRepeat} />
        </Form.Group>
        <Button variant="primary" type="submit" block onClick={registration}>
          Sign up
        </Button>
      </Form>
    )
  }
}

FormReg.contextType = AppContext

export default FormReg
