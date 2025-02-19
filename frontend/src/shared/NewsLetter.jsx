import React from "react";
import "./NewsLetter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to Get Exclusive Offers and Updates</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter your Email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Subscribe to our newsletter and be the first to discover
                exclusive travel deals, exciting destinations, insider tips, and
                special offers. Let us bring the world to your inbox—one
                unforgettable journey at a time!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
                <img src={maleTourist} alt="male tourist" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
