import React from "react";
// import { Navbars } from "../components";
import NavbarLogin from "./NavbarLogin"
import { Col, Form, Container, Button } from "react-bootstrap";


export function AddProperty() {
    const cities = [{ value: "-" }, { value: "Jakarta" }, { value: "Bandung" }, { value: "Medan" }];
    const period = [
        { value: "-" },
        { value: "Day" },
        { value: "Week" },
        { value: "Month" },
        { value: "Year" },
    ];
    const nums = [
        { value: "-" },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 },
        { value: 5 },
    ];
    return (
        <Container className="">
            <NavbarLogin />
            <Form className="fw-bold" style={{ marginTop: "150px" }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name Property</Form.Label>
                    <Form.Control id="name-property" name="name-property" type="text" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>City</Form.Label>
                    <Form.Select id="cities" name="cities" type="text" autoFocus>
                        {cities.map((e) => {
                            return <option>{e.value}</option>;
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        id="address"
                        name="address"
                        type="text"
                        style={{ resize: "none" }}
                        autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control id="price" name="price" type="text" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Type of Rent</Form.Label>
                    <Form.Select id="cities" name="cities" type="text" autoFocus>
                        {period.map((e) => {
                            return <option>{e.value}</option>;
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Amenities</Form.Label>
                    <div className="d-flex gap-5" style={{ fontWeight: "500", fontSize: "1.2rem" }}>
                        <Form.Check
                            //   style={{ fontWeight: "300", fontSize: "1.2rem" }}
                            type="check"
                            id="furnished"
                            label="Furnished" />
                        <Form.Check
                            //   style={{ fontWeight: "300", fontSize: "1.2rem" }}
                            type="check"
                            id="pet-allowed"
                            label="Pet Allowed" />
                        <Form.Check
                            //   style={{ fontWeight: "500", fontSize: "1.2rem" }}
                            type="check"
                            id="shared-accomodation"
                            label="Shared Acconodation" />
                    </div>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Bed Room</Form.Label>
                    <Form.Select id="bed-room" name="bed-room" type="text" autoFocus>
                        {nums.map((e) => {
                            return <option>{e.value}</option>;
                        })}
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Bath Room</Form.Label>
                    <Form.Select id="bath-room" name="bath-room" type="text" autoFocus>
                        {nums.map((e) => {
                            return <option>{e.value}</option>;
                        })}
                    </Form.Select>
                </Form.Group>
                <Col className="d-flex mb-5 justify-content-center">
                    <Button type="submit" className=" click" style={{ border: "none", width: "15rem" }}>
                        Save
                    </Button>
                </Col>
            </Form>
        </Container>
    );
}
