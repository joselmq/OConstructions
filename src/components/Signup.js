import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from "react-router-dom"
import { TopMenu, Footer, LateralMenu } from './Home';

export default function Signup() {
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmlRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmlRef.current.value){
            return setError("Las contraseñas no coinciden.")
        }

        try{
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Error al crear la cuenta.")
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
                            <h2 className="text-center mt-4">Registro</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>

                                <Form.Group id="password">
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>

                                <Form.Group id="password-confirm">
                                    <Form.Label>Confirmación de Contraseña</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmlRef} required />
                                </Form.Group>

                                <Button disabled={loading} className="w-100" type="submit" style={{ marginTop:"20px"}}>Registrarse</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        <Link to="/login">¿Ya tienes una cuenta? Inicia Sesión</Link>
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
