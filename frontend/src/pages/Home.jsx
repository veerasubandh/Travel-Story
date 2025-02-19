import React from "react";
import "../styles/Home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import heroImg02 from "../assets/images/hero-img02.jpg";
import worldImg from "../assets/images/world.png";
import experianceImg from "../assets/images/experience.png";
import Subtitle from "./../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/FeaturedTours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-Gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonials/Testimonials";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling Opens the Door to Creating{" "}
                  <span className="highlight"> MEMORIES</span>
                </h1>
                <p>
                  Every journey becomes a story filled with adventure, laughter,
                  and connections with people from around the world. Whether
                  it's exploring hidden gems, indulging in local cuisines, or
                  witnessing stunning sunsets, every trip leaves a lasting
                  impression. At Travel World, we create seamless travel
                  experiences, ensuring each destination becomes a cherished
                  memory.{" "}
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">WHAT WE SERVE?</h5>
              <h2 className="services__title">
                We provide you with the finest
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*Featured tour section*/}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">OUR REATURED TOURS</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/*Experiance section start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experiance__content">
                <Subtitle subtitle={"Experiance"} />
                <h2>
                  With our experience,
                  <br />
                  we are committed to serving you
                </h2>
                <p>
                  With years of expertise, we are dedicated to providing you
                  with exceptional service. Our experience ensures seamless
                  journeys, personalized experiences, and unforgettable
                  memories. <br />
                  Trust us to make every moment of your adventure extraordinary.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>SUCCESSFUL TRIPS</h6>
                </div>
                <div className="counter__box">
                  <span>6k+</span>
                  <h6>REGULAR CLIENTS</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>YEARS OF EXPERIANCE</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experiance__img">
                <img src={experianceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*Gallery section starts*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">
                Visit Our Customers Tour Gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>

      {/*Testimonial section*/}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Our Testimonials'}/>
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>

      {/*Newsletter section*/}
      <NewsLetter/>
    </>
  );
};

export default Home;
