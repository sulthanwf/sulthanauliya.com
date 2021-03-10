import styled from "styled-components"

export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: clamp(3rem, 6vw, 6rem);
  transition: 0.2s ease-in-out;
  cursor: none;

  &:hover {
    transform: translateY(-10px);
  }
`