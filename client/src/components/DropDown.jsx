import React from "react";
import { useParams } from "react-router-dom";
import Image from "react-bootstrap/Image";

import Robin from '../images/robin.jpg';
import Profile from '../images/user2.png';
import Cabin from "../images/cabin.png";
import Calender from "../images/calendar.png";
import Bill from "../images/bill.png";
import Logout from "../images/logout1.png";
import '../style/style.css';

import { useNavigate } from "react-router-dom";

import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

import Dropdown from "react-bootstrap/Dropdown";


function DropDown(props) {

  const dataId = JSON.parse(localStorage.getItem("DataId"));
  const status = JSON.parse(localStorage.getItem("UserSignUp"));
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <Dropdown align="end" style={{ color: "white", border: "white" }} id="dropdown-basic-button" title="Dropdown button">
        <DropdownToggle className="p-0 rounded-circle" style={{ width: "50px", height: "50px" }} variant="black">
          <Image roundedCircle className="si" src={Robin} />
        </DropdownToggle>
        <DropdownMenu>
          <Dropdown.Item 
          onClick={() => {
            navigate("/profile");
          }}
          className="dropDownNav">
            <img className="pe-2" src={Profile} alt="Profile" />
            <span style={{ color: "black" }}> Profile</span>
          </Dropdown.Item>

          {status.listAs === "Tenant" ? (
            <Dropdown.Item
              onClick={() => {
                navigate(`/mybooking/${dataId}`);
              }}
              className="dropDownNav"
            >
              <img className="pe-2" src={Calender} alt="My Booking" />
              <span style={{ color: "black" }}> My Booking</span>{" "}
            </Dropdown.Item>
          ) : (
            <Dropdown.Item
            onClick={() => {
            navigate("/add-property");
            }}
            className="dropDownNav">
              <img className="pe-2" src={Cabin} alt="Add Property" />
              <span style={{ color: "black" }}>Add Property</span>{" "}
            </Dropdown.Item>
          )}

          <Dropdown.Item
          onClick={() => {
            navigate("/index-owner/");
          }}
          className="dropDownNav">
            <img className="pe-2" src={Bill} alt="History" />
            <span style={{ color: "black" }}> History</span>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            onClick={() => {
              navigate("/");
              localStorage.removeItem("UserSignIn");
              props.setUserSignIn({
                ...props.userSignIn,
                isLogin: false,
              });
            }}
            className="dropDownNav"
          >
            <img className="pe-2" src={Logout} alt="" />
            <span style={{ color: "black" }}> Logout </span>
          </Dropdown.Item>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

export default DropDown;