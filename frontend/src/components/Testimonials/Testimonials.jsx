import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    slidesToShow: 3,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Booking my trip through Travel World was truly the best decision! The
          entire process, from selecting the perfect destination to finalizing
          the itinerary, was seamless and stress-free. The support team was
          always available to answer my queries, and every aspect of the trip
          was thoughtfully planned. My experience in Bali was nothing short of
          magical, with breathtaking views, comfortable accommodations, and
          well-organized tours. I’m already looking forward to my next adventure
          with them!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          I have traveled with different agencies before, but my experience with
          Travel Story was exceptional. The booking process was smooth, and the
          trip itself was even better than I expected. The tour guides were
          friendly and knowledgeable, ensuring that we got to explore the best
          spots without any hassle. The accommodations were comfortable, the
          transportation was punctual, and every detail was taken care of. I
          felt completely at ease throughout my journey. Highly recommended for
          anyone looking for a hassle-free and memorable travel experience!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Emily Warson</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          As a solo traveler, I was initially worried about planning my trip,
          but Travel Story made everything incredibly easy! From the first
          inquiry to the final day of my trip, everything was well-organized.
          Their team provided me with excellent recommendations, and I felt safe
          and comfortable throughout. The itinerary was thoughtfully curated,
          allowing me to explore hidden gems while also having enough time to
          relax. This was one of the best vacations I have ever had, and I can’t
          wait to plan my next trip with them!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Rohan M.</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          From start to finish, my experience with Travel Story was
          absolutely fantastic! The booking process was straightforward, and I
          received prompt assistance whenever I had questions. The tour itself
          exceeded my expectations – well-planned itineraries, knowledgeable
          guides, and seamless transportation. Every little detail was taken
          care of, allowing me to fully enjoy my vacation without any stress.
          I’ve already recommended Travel Story to my friends and family,
          and I can’t wait to book my next trip!
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Daniel Sharen</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
