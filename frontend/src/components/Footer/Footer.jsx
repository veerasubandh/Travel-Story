import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick_links1 = [
  { display: "Home", path: "/home" },
  { display: "About", path: "/about" },
  { display: "Tours", path: "/tours" },
];

const quick_links2 = [
  { display: "Gallery", path: "/gallery" },
  { display: "Login", path: "/login" },
  { display: "Register", path: "/register" },
];

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
              <p>
                Your perfect travel partner, making every journey seamless and
                memorable.
              </p>
              <div className="social__links d-flex align-items-center gap-4">
                <span>
                  <Link to="#">
                    <i className="ri-youtube-line" />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-github-fill" />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-facebook-circle-line" />
                  </Link>
                </span>
                <span>
                  <Link to="#">
                    <i className="ri-instagram-line" />
                  </Link>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className="footer__quick-links">
              {quick_links1.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className="footer__quick-links">
              {quick_links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
              <h5 className="footer__quick-title">Contact</h5>
              <ListGroup className='footer__quick-links'>
                <ListGroupItem className="ps-0 border-0">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i class="ri-map-pin-line"></i></span>
                    Address:
                  </h6>
                  <p className="mb-0">Pune, India</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i class="ri-mail-line"></i></span>
                    Email:
                  </h6>
                  <p className="mb-0">veerasubandh04@gmail.com</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <h6 className="mb-0 d-flex align-items-center gap-2">
                    <span><i class="ri-phone-fill"></i></span>
                    Phone:
                  </h6>
                  <p className="mb-0">9876543210</p>
                </ListGroupItem>
              </ListGroup>
          </Col>
          <Col lg='12' className='text-center pt-5'>
              <p className="copyright">@ {year} Copyright. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
