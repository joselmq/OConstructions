import React, { useState } from "react"
import { Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { TopMenu, Footer, LateralMenu } from './Home';

export default function Profile() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <div>
        <TopMenu />
      </div>
      <div className="container-fluid section-1">
        <div className="row flex-items-xs-center slider-1 flex-items-xs-middle" id="sec-1">
          <Container style={{marginTop:"100px"}} className="col-3">
            <Card style={{minWidth:"300px"}}>

              <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email:</strong> {currentUser.email}
                <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                  Update Profile
                </Link>
              </Card.Body>

              <Card.Body>
                <h2 className="text-center mb-4">Estado de la compra</h2>
                <strong>Status: <br/></strong> 
                <strong>Fecha de compra: <br/></strong> 
                <strong>Fecha estimada de entrega: <br/></strong> 
                <strong>Datos de venta: <br/></strong> 
              </Card.Body>

            </Card>
            <div className="w-100 text-center mt-2">
              <Button variant="link" onClick={handleLogout}>
                Cerrar Sesión
              </Button>
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