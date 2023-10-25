import { useRef, useState } from "react";
import { styled } from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { bestsellers } from "../utils/constants";
import Product from "./Product";

const windowWidth = window.innerWidth;

const FeaturedCarousel = () => {
  const [showBtns, setShowBtns] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  let lastSlide;
  if (windowWidth < 800) {
    lastSlide = activeSlide;
  } else if (windowWidth < 1000) {
    lastSlide = activeSlide + 1;
  } else {
    lastSlide = activeSlide + 2;
  }

  const slider = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (curr) => {
      setActiveSlide(curr);
    },
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  const prevSlide = () => {
    slider?.current?.slickPrev();
  };

  const nextSlide = () => {
    slider?.current?.slickNext();
  };

  const showSliderBtns = () => {
    setShowBtns(true);
  };

  const hideSliderBtns = () => {
    setShowBtns(false);
  };
  return (
    <Wrapper className="section">
      <div className="section-center">
        <h2>Bestsellers</h2>
      </div>
      <div
        className="slider-container"
        onMouseEnter={showSliderBtns}
        onMouseLeave={hideSliderBtns}
      >
        <div className="section-center">
          <Slider {...settings} ref={slider}>
            {bestsellers.map((product) => {
              return <Product key={product.id} {...product} />;
            })}
          </Slider>
        </div>
      </div>

      <button
        className={
          !showBtns || activeSlide === 0
            ? "slider-btn left"
            : "slider-btn left showleftBtn"
        }
        onMouseEnter={showSliderBtns}
        onClick={prevSlide}
      >
        <BsChevronLeft />
      </button>
      <button
        className={
          !showBtns || lastSlide === bestsellers.length - 1
            ? "slider-btn right"
            : "slider-btn right showRightBtn"
        }
        onMouseEnter={showSliderBtns}
        onClick={nextSlide}
      >
        <BsChevronRight />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  h2 {
    margin-bottom: 3rem;
  }

  .slick-slide > div {
    margin: 0 15px;
  }
  .slick-list {
    margin: 0 -15px;
  }

  .slider-btn {
    position: absolute;
    top: 50%;
    cursor: pointer;
    background-color: var(--clr-bg-accent);
    border: var(--border);
    padding: 1.2rem 1.5rem;
    z-index: 900;
    transition: all 0.2s ease-in-out;
  }

  .slider-btn svg {
    font-size: 1.2rem;
  }

  .left {
    left: 0;
    transform: translateX(-100%);
  }

  .showleftBtn {
    transform: translateX(0);
  }

  .right {
    right: 0;
    transform: translateX(100%);
  }

  .showRightBtn {
    transform: translateX(0);
  }
`;

export default FeaturedCarousel;
