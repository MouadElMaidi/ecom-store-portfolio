import styled from "styled-components";

import heroBcg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="hero-container">
        <img src={heroBcg} alt="denim background" className="hero-img" />
        <h1>
          Elevate your wardrobe <br /> with timeless fashion.
        </h1>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  padding: 5rem 0;

  .hero-container {
    position: relative;
  }

  .hero-img {
    width: 100%;
    /* height: 200px; */
    object-fit: cover;
    display: block;
    height: calc(100vh - 5rem);
  }

  .hero-container h1 {
    position: absolute;
    bottom: 4rem;
    left: 30px;
    color: white;
    font-weight: 300;
  }

  @media (min-width: 992px) {
    .hero-img {
      height: calc(100vh - 5rem);
    }
  }
`;

export default Hero;
