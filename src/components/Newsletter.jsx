import styled from "styled-components";

const Newsletter = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form
            className="contact-form"
            action="https://formspree.io/f/xoqoylbd"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  h3 {
    text-transform: none;
    margin-bottom: 1rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: var(--border);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }

  .form-input::placeholder {
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-9);
    text-transform: capitalize;
    cursor: pointer;
    transition: var(--transition);
    color: white;
  }
  .submit-btn:hover {
    color: var(--clr-primary-9);
    background-color: transparent;
  }
  @media (min-width: 992px) {
    h3 {
      margin-bottom: 0;
    }
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
`;

export default Newsletter;
