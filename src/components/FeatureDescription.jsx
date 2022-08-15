import React from "react";
import styled from "styled-components";

const StyledFeatureDescription = styled.article`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    max-width: 37ch;
    line-height: 1.4;
    margin: 2rem 0;
  }

  h2 {
    max-width: 14ch;
  }
  
  a {
    position: relative;
    color: black;
  }

  a::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: calc(100% - 0.3rem);
    left: 0;
    width: calc(100% + 0.5rem);
    transform: translateX(-0.25rem);
    height: 0.5rem;
    border-radius: 1000px;
    background-color: ${props => props.color};
  }

  @media screen and (max-width: 850px) {
    text-align: center;
  }

  
`;

const FeatureDescription = ({ children, color }) => {
  return <StyledFeatureDescription color={color}>{children}</StyledFeatureDescription>;
};

export default FeatureDescription;
