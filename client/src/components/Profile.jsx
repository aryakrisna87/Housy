import Navbar from "./Navbar";
// import HomeLogin from "../pages/HomeLogin";
import { Button, Container,Row, Col } from "react-bootstrap";
import React, { useEffect } from "react";
// IMPORT IMAGES
import Name from "../images/IP.png";
import Ema from "../images/Email.png";
import Phone from "../images/Phone.png";
import Place from "../images/Tendant.png";
import Robin from "../images/robin.jpg";
import Ad from "../images/Lock.jpg";
import G from "../images/Gender.png";
import Password from "../images/Pass.png"
// import home from "../pages/Home";
// import { Pass } from "react-bootstrap-icons";

export default function Profile(props) {
  useEffect(() => {
    document.body.style.background = "rgba(196, 196, 196, 0.25)";
  });
  return (
    <div className="" style={{marginTop:"9rem"}}>
      {/* <HomeLogin /> */}
      <Navbar userSignIn={props.userSignIn} setUserSignIn={props.setUserSignIn} />
      <Container className="">
        <Row className="justify-content-between bg-white">
          <Col className="d-flex flex-column gap-3" sm={4}>
            <h3 className="fw-bold ">Personal Info</h3>
            <div className="d-flex align-items-center gap-3">
              <div>
                <img width={40} src={Name} alt="" />
              </div>
              <div className="d-flex flex-column">
                <span className="p-0 m-0 fw-bold">Robin</span>
                <span className="fs14 text-secondary">Full Name</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={40} src={Ema} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0 fw-bold">Robin@gt.com</span>
                <span className="fs14 text-secondary">Email</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={40} src={Password} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0" fw-bold>Change Password</span>
                <span className="fs14 text-secondary">Password</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={39} src={Place} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0 fw-bold">Owner</span>
                <span className="fs14 text-secondary">Status</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={39} src={G} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0 fw-bold">Female</span>
                <span className="fs14 text-secondary">Gender</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={40} src={Phone} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0 fw-bold">088809226220</span>
                <span className="fs14 text-secondary">Mobile phone</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img width={38} src={Ad} alt="" />
              <div className="d-flex flex-column">
                <span className="p-0 m-0 fw-bold">Perumahan Permata Bintaro Residence C-1</span>
                <span className="fs14 text-secondary">Address</span>
              </div>
            </div>
          </Col>
          <Col className=" d-flex flex-column gap-3 px-3 me-2" sm={4}>
            <div>
              <img className="w-100 rounded pt-4" src={Robin} alt="" />
            </div>
            <div>
              <Button className="w-100">Change Foto Profile</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}