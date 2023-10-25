import { useEffect, useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { pressReviews } from "../utils/constants";

const MagazineReviews = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    asNavFor: nav2,
    arrows: false,
    swipe: false,
    fade: true,
    afterChange: (curr) => {
      setActiveSlide(curr);
    },
  };

  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: nav1,
    swipe: false,
  };

  const nextSlide = () => {
    setActiveSlide((oldSlide) => {
      const result = (oldSlide + 1) % pressReviews.length;
      return result;
    });
  };

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => {
      clearInterval(sliderId);
    };
  }, []);

  useEffect(() => {
    nav1?.slickGoTo(activeSlide);
  }, [activeSlide, nav1]);

  return (
    <Wrapper className="section">
      <div className="section-center press-section">
        <Slider {...settings} ref={(slider1) => setNav1(slider1)}>
          {pressReviews.map((review) => {
            return (
              <div key={review.id} className="review">
                <h1>{review.text}</h1>
              </div>
            );
          })}
        </Slider>
        <Slider {...settings2} ref={(slider2) => setNav2(slider2)}>
          {pressReviews.map((review, index) => {
            return (
              <div key={review.id} className="review">
                <h2
                  onClick={() => setActiveSlide(index)}
                  className={
                    index === activeSlide ? "logo active-slice" : "logo"
                  }
                >
                  {review.logo}
                </h2>
              </div>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #f4f2e3;

  .press-section {
    max-width: 70vw;
  }

  .review h1 {
    text-align: center;
    font-weight: 300;
    max-width: 30em;
    margin: 0 auto;
    margin-bottom: 5rem;
  }

  .logo {
    text-align: center;
    font-weight: 300;
    margin: 0 auto;
    cursor: pointer;
  }

  .active-slice {
    font-weight: 600;
  }
`;

export default MagazineReviews;
