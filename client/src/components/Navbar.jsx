import Container from 'react-bootstrap/Container';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CiSearch } from 'react-icons/ci';
import Logo from '../images/Icon.svg';
import Button from 'react-bootstrap/Button';
import SignIn from './SignIn';
import SignUp from './SignUp';
import DropDown from './DropDown';


function Navigate(props) {
  const [signIn, setSignIn] = React.useState(false);
  const [signUp, setSignUp] = React.useState(false);

  const handleSignup = () => {
    setSignUp(true);
  };

  const handleSignin = () => {
    setSignIn(true);
  };

  return (
    <>
    <Container fluid>
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav"> */}
    <Navbar fixed='top' className='bg-white mb-5'>
      <Row className="w-100">
        <Col >
          <Navbar.Brand href="/">
            <img src={Logo} alt="Housy Logo" className='mt-2 ms-5' />
          </Navbar.Brand>
        </Col>
        <Col className='d-flex my-4 '>
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Search"
              className="ms-auto"
              aria-label="Search" />
            <Button className='align-item-center' variant="secondary" size="sm" id="search"><CiSearch /></Button>
          </InputGroup>
        </Col>
        <Col className='d-flex align-items-center' >
          <Nav className='ms-auto'>
          {!localStorage.getItem("UserSignIn") ? (
            <> 
            <Button className='fw-bold btn-light shadow-sm me-3' onClick={() => setSignIn(true)}>Sign in</Button>
            <Button className='fw-bold btn-light shadow-sm me-3' onClick={() => setSignUp(true)}>Sign up</Button>
            </>
            ) : (
              <>
              <DropDown userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} />
              </>
            ) }
            
          </Nav>
        </Col>
      </Row>
      </Navbar>
    </Container> 
    <SignIn  userSignIn = {props.userSignIn} setUserSignIn={props.setUserSignIn}
      openSignup={handleSignup} show={signIn} onHide={() => setSignIn(false)} />
    <SignUp openSignin={handleSignin} show={signUp} onHide={() => setSignUp(false)} />
    </>
  );
}

export default Navigate;