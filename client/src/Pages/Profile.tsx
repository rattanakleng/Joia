// // import React from 'react';
import { Row, Col, Container } from '../LayoutComponents/Grid/Grid'
import { FormBtn, FormBtnOutline } from '../components/Form/Form'
import { useAuthenticatedUser, useLogout } from '../utils/auth'
import './Profile'
import './Signup'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Profile = () => {
  const user = useAuthenticatedUser()

  console.log('authUser = ', user)

  return (
    <div className="wrapper">
      <div className="main-content">
      <Container py="-4">
        <div className="container">
          <h1 className="text-center">Welcome, {user.name}</h1>
          <Row py="-3">
            <Col size="md-4 sm-12">
              {/* <img
              className="img-fluid pr-4 mt-3"
              src="./assets/img/profile.jpg"
              alt="Uploaded artwork"
            /> */}
            </Col>

            <Col size="md-8 sm-12">
              <form className="pt-5 mb-4">
                <div>
                  <div>
                    <h5>
                      <b>Name:</b>&nbsp;&nbsp;&nbsp;{user.name}
                    </h5>
                  </div>

                  <div>
                    <h5>
                      <b className="mr-3">Location:</b>
                      {user.location}
                    </h5>
                  </div>

                  <div>
                    <h5>
                      <b className="mr-3">Email:</b>
                      {user.email}
                    </h5>
                  </div>

                  <div></div>
                  <h5>
                    <b className="mr-3">Phone:</b>
                    {user.phone}
                  </h5>
                </div>
              </form>

              <Link to="/allartworksbyuser" className="btn btn-warning mr-3">
                My Artworks
              </Link>

              <Link to="/post" className="btn btn-outline-warning">
                Post New Artwork
              </Link>
            </Col>
            <div></div>
          </Row>
        </div>
      </Container>
      </div>
      
    </div>
  )
}

export default Profile
