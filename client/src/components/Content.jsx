import React from "react"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import '../style/style.css';
import ListData from '../assets/datas/data';
import { useNavigate } from "react-router-dom";


function Content() {
  const navigate = useNavigate();
    return (
    <>
    <Col className='' style={{marginLeft:"24rem",marginTop:"7rem"}} sm={9}>
      <div className='row row-cols-3'>
          {ListData.map((value, index) => {
            return (
              <div className="p-3 bg">
              <Card key={index} className="p-2">
                  <span className="position-absolute px-3 py-1 bg-white rounded-2 fs-6 mt-2 ms-2">{value.amenities}</span>
                <Card.Img onClick={() => navigate(`/detail/${index + 1}`)} variant="top" src={require("../images/" + value.image)} />
                  <Card.Body className=" bs m-0 p-0 d-flex flex-column gap-1">
                    <Card.Title className="fs18 fw-semibold m-0 p-0 mt-2">
                      {value.price} / {value.rent}
                    </Card.Title>
                    <Card.Text className="fs10 m-0 p-0 fw-semibold">{value.property.beds + " beds, " + value.property.Bats + " Bats, " + value.property.Area}</Card.Text>
                    <Card.Text className="fs10 m-0 p-0 text-secondary fw-semibold">{value.address}</Card.Text>
                  </Card.Body>
                </Card>
                </div>
              );
            })}
      </div>
    </Col>
    </>
    )
}


export default Content;