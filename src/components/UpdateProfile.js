import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { TopMenu, Footer, LateralMenu } from './Home';

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Las contraseñas no coinciden")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Error al actualizar la cuenta.")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
    <div>
      <TopMenu />
    </div>
    <div className="container-fluid section-1">
        <div className="row flex-items-xs-center slider-1 flex-items-xs-middle" id="sec-1">
            <Container style={{marginTop:"100px"}} className="col-3">
                <Card>
                    <Card.Body>
                    <h2 className="text-center mb-4">Actualizar perfil</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control
                            type="email"
                            ref={emailRef}
                            required
                            defaultValue={currentUser.email}
                        />
                        </Form.Group>
                        <Form.Group id="password">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            ref={passwordRef}
                            placeholder="Leave blank to keep the same"
                        />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                        <Form.Label>Confirmación de Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            ref={passwordConfirmRef}
                            placeholder="Leave blank to keep the same"
                        />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">
                        Actualizar
                        </Button>
                    </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    <Link to="/">Cancelar</Link>
                </div> 
                </Container>
            </div>
        </div>
        <div>
          <Footer />
        </div>
  
        <div>
          <LateralMenu />
        </div>
        </>
  )
}