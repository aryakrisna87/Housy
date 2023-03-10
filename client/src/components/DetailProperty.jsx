import "bootstrap/dist/css/bootstrap.min.css";
// import NavbarProject from "../components/NavbarProject";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/esm/Container";
// import Img1 from "../images/Img1.jpg";
import Bath from "../assets/images/bath.jpg";
import Bed from "../assets/images/bed.jpg";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import bathimg from "../assets/img/bathimg.png";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
// import bedimg from "../assets/img/bedimg.png";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
// import listData from "../components/Data";
// import { useContext } from "react";
import Navbar from "../components/Navbar";
import listData from "../assets/datas/data";
import { useQuery } from "react-query";
import { API } from "../config/api";
import convertRupiah from "rupiah-format";

function MyBookModal(props) {
    const { id } = useParams();

    const navigate = useNavigate();
    const [checkIn, setCheckIn] = useState({
        check_in: "",
        check_out: "",
    });

    const handleOnChange = (e) => {
        setCheckIn({
            ...checkIn,
            [e.target.name]: e.target.value,
        });
    };

    const handle = (e) => {
        // e.preventDefault();
        localStorage.setItem("Date", JSON.stringify(checkIn));
        localStorage.setItem("Data", JSON.stringify(listData[id]));
        localStorage.setItem("DataId", id);
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="mt-4">
                <Form>
                    <Form.Group
                        className="mb-3"
                        style={{ display: "flex", flexDirection: "column" }}
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label style={{ fontWeight: "bold" }}>
                            Check-in
                        </Form.Label>
                        <Form.Control
                            type="date"
                            name="check_in"
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        style={{ display: "flex", flexDirection: "column" }}
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label style={{ fontWeight: "bold" }}>
                            Check-Out
                        </Form.Label>
                        <Form.Control
                            type="date"
                            name="check_out"
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                    <d
                        iv
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Button
                            className="px-5 py-1"
                            variant="primary"
                            onClick={() => {
                                handle();
                                navigate(`/mybooking/${id}`);
                            }}
                        >
                            Order
                        </Button>
                    </d>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default function DetailProperty(props) {
    //
    useEffect(() => {
        document.body.style.background = "rgba(196, 196, 196, 0.25)";
    });

    const [modalSignIn, setModalSignIn] = React.useState(false);
    const [modalSignUp, setModalSignUp] = React.useState(false);

    const handleSignin = () => {
        setModalSignIn(true);
    };
    const handleSignup = () => {
        setModalSignUp(true);
    };

    const [modalShow, setModalShow] = React.useState(false);
    const { id } = useParams();
    // const listData = props.listData;
    //
    let { data: detail } = useQuery("detailCache", async () => {
        const response = await API.get("/house/" + id);
        console.log(response);
        return response.data.data;
    });

    console.log(detail);

    return (
        <>
            <Navbar />

            <Container
                style={{ margin: "200px" }}
                className="mx-auto px-5 mt-5 pt-5 d-flex flex-column"
            >
                <Row>
                    <Col className="mt-5">
                        <div className="mb-4">
                            <img
                                className="w-100"
                                style={{ height: "600px" }}
                                src={detail?.image}
                                alt=""
                            />
                        </div>
                        <div className="mb-5">
                            <Row>
                                <Col>
                                    <img
                                        className="w-100"
                                        src={detail?.image}
                                        alt=""
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className="w-100"
                                        src={detail?.image}
                                        alt=""
                                    />
                                </Col>
                                <Col>
                                    <img
                                        className="w-100"
                                        src={detail?.image}
                                        alt=""
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className="mb-5">
                            <h1 className="fw-bold">{detail?.name}</h1>
                        </div>
                        <div className="d-flex justify-content-between mb-5">
                            <Col sm={4}>
                                <h3 className="fw-bold">
                                    {convertRupiah.convert(detail?.price) +
                                        " / " +
                                        detail?.type_rent}
                                </h3>
                                <p>
                                    Jl. Elang IV Perum Permata Bintaro
                                    Residence, Pondok Aren,Tangerang Selatan
                                </p>
                            </Col>
                            <Col className="d-flex" sm={3}>
                                <Col>
                                    <p className="p-0 m-0">Bedrooms</p>
                                    <div className="d-flex gap-2">
                                        <span className="fw-bold">
                                            {detail?.Bedroom}
                                        </span>
                                        <img src={Bed} alt="" />
                                    </div>
                                </Col>
                                <Col>
                                    <p className="p-0 m-0">Bathrooms</p>
                                    <div className="d-flex gap-2">
                                        <span className="fw-bold">
                                            {detail?.Bathroom}
                                        </span>
                                        <img src={Bath} alt="" />
                                    </div>
                                </Col>
                                <Col>
                                    <p className="p-0 m-0">Area</p>
                                    <div>
                                        <span className="fw-bold">1.800pl</span>
                                    </div>
                                </Col>
                            </Col>
                        </div>
                        <div>
                            <h4 className="fw-bold">Description</h4>
                            <p style={{ textAlign: "justify" }}>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text. All the Lorem Ipsum generators on the
                                Internet tend to repeat predefined chunks as
                                necessary, making this the first true.
                            </p>
                        </div>
                        <div className="d-flex justify-content-end">
                            {!localStorage.getItem("token") ? (
                                <Button
                                    className="mt-5 px-5"
                                    onClick={() => setModalSignIn(true)}
                                >
                                    Book Now
                                </Button>
                            ) : (
                                <Button
                                    className="  "
                                    onClick={() => setModalShow(true)}
                                >
                                    Book Now
                                </Button>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
            <MyBookModal show={modalShow} onHide={() => setModalShow(false)} />
            <SignIn
                openSignup={handleSignup}
                userSignIn={props.userSignIn}
                setUserSignIn={props.setUserSignIn}
                show={modalSignIn}
                onHide={() => setModalSignIn(false)}
            />
            <SignUp
                openSignin={handleSignin}
                show={modalSignUp}
                onHide={() => setModalSignUp(false)}
            />
        </>
    );
}
