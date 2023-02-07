import { Container, Button, Modal, Row, Col } from "react-bootstrap";
import Logo from "../assets/images/Icon.svg";
import Bukti from "../assets/images/Bukti.jpg";
import Navbar from "../components/Navbar";
import listData from "../assets/datas/data";
// import { useState } from "react"
import { useParams } from "react-router-dom";
import Kosong from "../assets/images/kosong.jpg";
import Isi from "../assets/images/isi.jpg";
import Garis from "../assets/images/garis.jpg";
import { useEffect } from "react";
import React from "react";
// import Bugis from "../images/bulatgaris.png";
import { useQuery } from "react-query";
import { API } from "../config/api";
import Moment from "react-moment";
import convertRupiah from "rupiah-format";

import jwt from "jwt-decode";

function PayModal(props) {
    // const navigate = useNavigate();

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <p>
                    Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk
                    melihat pesanan <a href="">Klik Disini</a> Terimakasih
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function MyBooking(props) {
    const Results = () => (
        <Button
            onClick={() => {
                setModalShow(true);
                localStorage.setItem("statusPay", "Success!");
            }}
            style={{ width: "200px" }}
        >
            Pay
        </Button>
    );

    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        document.body.style.background = "rgba(196, 196, 196, 0.25)";
    }, [setModalShow]);

    const { id } = useParams();
    const getData = JSON.parse(localStorage.getItem("Date"));
    // const Profile = JSON.parse(localStorage.getItem("UserSignUp"));

    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // var today = new Date();
    const getToken = localStorage.getItem(`token`);
    const idToken = jwt(getToken);

    const { data: user } = useQuery("userCache", async () => {
        const response = await API.get("/user/" + idToken.id);
        console.log("ini data response user", response);
        return response.data.data;
    });

    let { data: house } = useQuery("houseCache", async () => {
        const response = await API.get("/house/" + id);
        console.log("data house", response);
        return response.data.data;
    });

    return (
        <div style={{ marginTop: "9rem" }}>
            <Navbar
                userSignIn={props.userSignIn}
                setUserSignIn={props.setUserSignIn}
            />
            <Container
                className="myc fmb"
                style={{ width: "80%", marginTop: "200px" }}
            >
                <div
                    className="border border-3 p-4 pe-0 pb-0"
                    style={{ backgroundColor: "white" }}
                >
                    <Row style={{}} className="d-flex jcb">
                        <Col className="" md="auto" lg={4}>
                            <img src={Logo} alt="" />
                        </Col>
                        <Col className="" md="auto" lg={4}>
                            <h2 className="text-center p-0 m-0 fw-bold">
                                Booking
                            </h2>
                            {/* <Moment format="D-MMM-YYYY"> {today}</Moment> */}
                            {/* <p className="text-center p-0 m-0">{today}</p> */}
                            {/* {today} */}
                        </Col>
                    </Row>
                    <Row
                        style={{}}
                        className="d-flex jcb align-items-center pb-3"
                    >
                        <Col className="" md="auto" lg={4}>
                            <h5 className="fw-bold">{house?.name}</h5>
                            {!localStorage.getItem("statusPay") ? (
                                <p className="bg-danger w-50 text-center p-1 bg-opacity-10 text-danger">
                                    Waiting Payment
                                </p>
                            ) : (
                                <p className="bg-warning w-50 text-center p-1 bg-opacity-10 text-warning">
                                    Waiting Approve
                                </p>
                            )}
                        </Col>
                        <Col className="" md="auto" lg={4}>
                            <div className="d-flex flex-column ">
                                <div className="d-flex  align-items-center gap-4">
                                    <div>
                                        <img src={Kosong} alt="" />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span>Check-in</span>
                                        <span>{getData.check_in}</span>
                                    </div>
                                    <div className="ms-3 d-flex flex-column">
                                        <span>Amenities</span>
                                        <span>{house?.amenities}</span>
                                    </div>
                                </div>

                                <div className="d-flex ">
                                    <img
                                        style={{ marginLeft: "6px" }}
                                        src={Garis}
                                        alt=""
                                    />
                                </div>
                                <div className="d-flex  align-items-center gap-4">
                                    <div>
                                        <img src={Isi} alt="" />
                                    </div>

                                    <div className="d-flex flex-column ">
                                        <span>Check-Out</span>
                                        <span>{getData.check_out}</span>
                                    </div>
                                    <div className="ms-3 d-flex flex-column ">
                                        <span>Type of Rent</span>
                                        <span>{house?.type_rent}</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col
                            className="d-flex flex-column justify-content-center align-items-center gap-2"
                            md="auto"
                            lg={4}
                        >
                            <img src={Bukti} alt="" style={{ width: 150 }} />
                            <Button
                                type="submit"
                                //onSubmit={handleChangePhoto}
                                className="position-relative p-0 m-0 bg text-dark bd"
                                variant="outline-primary"
                            >
                                <input
                                    className="d-block position-absolute h-100 w-100"
                                    id="formFile"
                                    type="file"
                                    name="image"
                                    //         onChange={handleChangePhoto}
                                    style={{ cursor: "pointer", opacity: 0 }}
                                />
                                <span className="d-block py-2 px-3">
                                    Upload Image
                                </span>
                            </Button>
                        </Col>
                    </Row>
                    <Row className="d-flex">
                        <Row>
                            <Col className="d-flex" md="auto" lg={8}>
                                <Col
                                    className="d-flex align-items-center"
                                    md="auto"
                                    lg={1}
                                >
                                    <p className="m-0 py-2">No</p>
                                </Col>
                                <Col
                                    className="d-flex align-items-center"
                                    md="auto"
                                    lg={3}
                                >
                                    <p className="m-0">Full Name</p>
                                </Col>
                                <Col
                                    className="d-flex align-items-center"
                                    md="auto"
                                    lg={3}
                                >
                                    <p className="m-0">Gender</p>
                                </Col>
                                <Col
                                    className="d-flex align-items-center"
                                    md="auto"
                                    lg={3}
                                >
                                    <p className="m-0">Phone</p>
                                </Col>
                            </Col>
                        </Row>
                        <Row className="border border-start-0 border-end-0  ">
                            <Col className="d-flex" lg={8}>
                                <Col
                                    className="d-flex align-items-center"
                                    md="auto"
                                    lg={1}
                                >
                                    <p className="m-0">1</p>
                                </Col>
                                <Col
                                    className="d-flex align-items-center"
                                    md="auto"
                                    lg={3}
                                >
                                    <p className="m-0">{user?.fullname}</p>
                                </Col>
                                <Col
                                    className="d-flex align-items-center"
                                    md="auto"
                                    lg={3}
                                >
                                    <p className="m-0">{user?.gender}</p>
                                </Col>
                                <Col
                                    className="d-flex align-items-center"
                                    md="auto"
                                    lg={3}
                                >
                                    <p className="m-0">{user?.phone}</p>
                                </Col>
                            </Col>
                            <Col className="d-flex align-items-center">
                                <p className="ps-3 m-0">Long time rent</p>
                            </Col>
                            <Col className="d-flex align-items-center">
                                <p className="m-0 py-2">
                                    : {house?.type_rent}
                                </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-end">
                            <Col className="d-flex align-items-center" lg={2}>
                                <p className=" m-0 ps-3 py-2">Total</p>
                            </Col>
                            <Col className="d-flex align-items-center" lg={2}>
                                    <p className="m-0 text-danger fw-bold">{convertRupiah.convert(house?.price)}</p>
                            </Col>
                        </Row>
                    </Row>
                </div>
                <div className="d-flex justify-content-end mt-3 pb-5">
                    {/* <Button onClick={() => setModalShow(true)} style={{ width: "200px" }}>
            Pay
          </Button> */}
                    {!localStorage.getItem("statusPay") ? <Results /> : null}
                    <PayModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </Container>
        </div>
    );
}
export default MyBooking;
