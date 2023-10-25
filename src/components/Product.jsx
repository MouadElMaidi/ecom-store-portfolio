import { styled } from "styled-components";

import { formatPrice } from "../utils/helpers";

const Product = ({ name, price, imgUrl }) => {
  return (
    <Wrapper>
      <img src={imgUrl} alt={name} />
      <footer>
        <a href="/">{name}</a>
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
