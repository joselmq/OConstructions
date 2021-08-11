import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { TopMenu, Footer, LateralMenu } from './Home';

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Revisa tu correo para ver instrucciones.")
    } catch {
      setError("Error al restablecer la contraseña")
    }

    setLoading(false)
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
                        <h2 className="text-center mb-4">Restablecer Contraseña</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}

                        <Form onSubmit={handleSubmit}>

                            <Form.Group id="email">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>

                            <Button disabled={loading} className="w-100" type="submit">
                                Restablecer Contraseña
                            </Button>

                        </Form>

                        <div className="w-100 text-center mt-3">
                            <Link to="/login">Ingresar</Link>
                        </div>

                    </Card.Body>
                </Card>

                <div className="w-100 text-center mt-2">
                <Link to="/signup">¿Necesitas una cuenta? Regístrate</Link>
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