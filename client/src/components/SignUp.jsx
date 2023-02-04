import '../style/style.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Alert } from 'react-bootstrap';

import { useMutation } from 'react-query';
import { API } from '../config/api';

export default function SignUp(props) {

  const [userSignUp, setUserSignUp] = useState ({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    listAs: "",
    gendre: "",
    address: "",
    phone: "",
  });

  const redirectSignin = (e) => {
    props.onHide();
    props.openSignin();
  };

  const handleOnSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
  
      // Configuration Content-type
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
  
      // Data body
      const body = JSON.stringify(userSignUp);
  
      // Insert data user to database
      const response = await API.post('/sign-up ', body, config);
  
      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });
  
  // function handleOnSubmit(e) {
  //   e.preventDefault();
  //   localStorage.setItem("UserSignUp", JSON.stringify(userSignUp));
  //   redirectSignin();
  // }

  const handleOnChange = (e) => {
    setUserSignUp({
      ...userSignUp,
      [e.target.name]: e.target.value,
    })
  };

  return (
    <>
    <div className='px-5'>
      <Modal 
      {...props}
      size="md" aria-labelledby="contained-modal-title-vcenter"
      centered>
          <Modal.Title className='signmid fw-bold mt-3'>Sign Up</Modal.Title>
        <Modal.Body 
        style={{
          height: "500px",
          overflow: "hidden",
              }}>
          <Form onSubmit={(e) => handleOnSubmit.mutate(e)} 
          style={{
            height: "420px",
            overflow: "auto",
                 }}
          >
            <Form.Group className="mb-2" onChange={handleOnChange}>
              <Form.Label className='fw-bold'>Full Name</Form.Label>
              <Form.Control
                name="fullName"
                type="text"
                placeholder="Full Name"
              />
            </Form.Group>
            <Form.Group className="mb-2" onChange={handleOnChange}>
              <Form.Label className='fw-bold'>User Name</Form.Label>
              <Form.Control
                name="userName"
                type="text"
                placeholder="User Name"
              />
            </Form.Group>
            <Form.Group className="mb-2" onChange={handleOnChange}>
              <Form.Label className='fw-bold'>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="mb-2" onChange={handleOnChange}>
              <Form.Label className='fw-bold'>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="useAs" onChange={handleOnChange}>
              <Form.Label className='fw-bold'>List As</Form.Label>
              <Form.Select name="listAs" aria-label="Default select example">
              <option> </option>
              <option value="Tenant">Tenant</option>
              <option value="Owner">Owner</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2" controlId="gendre" onChange={handleOnChange}>
              <Form.Label className='fw-bold'>Gender</Form.Label>
              <Form.Select name="gendre" aria-label="Default select example">
              <option > </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2" onChange={handleOnChange}>
              <Form.Label className='fw-bold'>Phone</Form.Label>
              <Form.Control
                name="phone"
                type="text"
                placeholder="Phone"
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="alamat" onChange={handleOnChange}>
              <Form.Label className='fw-bold'>Address</Form.Label>
              <Form.Control as="textarea" type="text-input" style={{resize:"none"}} placeholder="" autoFocus name="address"/>
            </Form.Group>
          <Button onClick={(e) => redirectSignin(e)} type='submit' className='w-100 mt-2' variant="primary">
            Sign Up
          </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
}
