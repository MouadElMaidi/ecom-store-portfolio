import styled from "styled-components";

import elegantImg from "../assets/elegant.svg";
import functionalImg from "../assets/functional.svg";

const AboutSection = () => {
  return (
    <Wrapper className="section">
      <div className="container">
        <img
          src={elegantImg}
          alt="A woman wearing formal clothes"
          className="about-img"
        />
        <div>
          <h1>
            <span className="elegant-txt">Elegant &</span>
            <br />
            Functional.
          </h1>
          <p>
            We offer clothing that you can take pride in wearing, and that
            provides comfort and style.
          </p>
        </div>

        <img
          src={functionalImg}
          alt="A woman jumping"
          className="about-img functional-img"
        />
      </div>
      <button className="btn btn--about-me">About us</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background-color: yellow; */

  .container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin-bottom: 4rem;
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  p {
    text-align: center;
  }

  .elegant-txt {
    font-weight: 300;
  }

  .about-img {
    display: none;
    width: 100%;
    height: 200px;
  }

  .functional-img {
    display: inline-block;
    margin-bottom: 2rem;
  }

  .btn--about-me {
    display: block;
    margin: 0 auto;
  }

  @media (min-width: 1000px) {
    .container {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }

    h1 {
      font-size: 6rem;
    }

    .about-img {
      display: inline-block;
      width: 100%;
      height: 200px;
      object-fit: cover;
      align-self: end;
    }

    .functional-img {
      margin-bottom: 0rem;
    }
  }
`;

export default AboutSection;
