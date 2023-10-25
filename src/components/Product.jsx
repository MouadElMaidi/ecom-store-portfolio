import { styled } from "styled-components";

import { formatPrice } from "../utils/helpers";

const Product = ({ title, price, imgUrl }) => {
  return (
    <Wrapper>
      <img src={imgUrl} alt={title} />
      <footer>
        <a href="/">{title}</a>
        <p>{formatPrice(price)}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: #f4f2e3;
  img {
    height: 400px;
    width: 100%;
    object-fit: cover;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem 2rem 1rem;
  }
`;

export default Product;
