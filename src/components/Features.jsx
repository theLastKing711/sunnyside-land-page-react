import React from 'react'
import styled from 'styled-components';

import EggDesktopBackground from "../assets/desktop/image-transform.jpg";
import JuiceDesktopBackground from "../assets/desktop/image-stand-out.jpg";
import CherryDesktopBackground from "../assets/desktop/image-graphic-design.jpg";
import FullOrangeDesktopBackground from "../assets/desktop/image-photography.jpg";
import FeatureDescription from './FeatureDescription';

const StyledFeatures = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));
  grid-template-rows: 50vh 50vh 50vh;

  grid-template-areas: "first" "second" "third" "fourth" "fifth" "six";

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 50vh);

    .first {
      grid-area: second;
    }

    .second {
      grid-area: first;
    }

    .third {
      grid-area: third;
    }

    .fourth {
      grid-area: fourth;
    }
    
  } 


  
`;

const StyledFeature = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  background-image: url(${(props) => props.img});
  background-size: 100% 100%;
  text-align: center;
  padding: 2.5rem;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    max-width: 40ch;
    line-height: 1.4;
  }

  
  
`;

const StyledFeatureImageContainer = styled.div``;


const Features = () => {
  
  return (
    <StyledFeatures>
        <FeatureDescription classname="first" color="hsl(51, 100%, 49%)">
          <div>
            <h2>Transform your brand</h2>
            <p>
              we are a full-service creative agency specializing in helping
              brand grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <a href="#">
              LEARN MORE
            </a>
          </div>
        </FeatureDescription>
        <StyledFeatureImageContainer className="second">
          <img src={EggDesktopBackground} alt="feature description image" />
        </StyledFeatureImageContainer>
        <StyledFeatureImageContainer className="third">
          <img src={JuiceDesktopBackground} alt="feature description image" />
        </StyledFeatureImageContainer>
        <FeatureDescription className="fourth" color="hsl(7, 99%, 70%)">
          <div>
            <h2>Stand out to right audiene</h2>
            <p>
              Using alcollaborative formula of designers.researchers,
              photographers, vidographers and copy writters, we'll build and
              extend your brand in digital places
            </p>
            <a href="#">
              LEARN MORE
            </a>
          </div>
        </FeatureDescription>
        <StyledFeature img={CherryDesktopBackground} className="fifth">
          <h2>Graphic Desgin</h2>
          <p>
            Great desgin make you memorable. we deliver artwork that underscores
            your brand message and captures potential clients attention
          </p>
        </StyledFeature>
        <StyledFeature img={FullOrangeDesktopBackground} className="six">
          <h2>Photography</h2>
          <p>
            increase your credibility by getting the most stunnign. high-quality
            photos that improve your business image.
          </p>
        </StyledFeature>
      </StyledFeatures>
  )
}

export default Features