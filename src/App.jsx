import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import OrangeDesktopImage from "../src/assets/desktop/image-header.jpg";
import FeatureDescription from "./components/FeatureDescription";
import EggDesktopBackground from "../src/assets/desktop/image-transform.jpg";
import JuiceDesktopBackground from "../src/assets/desktop/image-stand-out.jpg";
import CherryDesktopBackground from "../src/assets/desktop/image-graphic-design.jpg";
import FullOrangeDesktopBackground from "../src/assets/desktop/image-photography.jpg";
import ArrowDownSvg from "../src/assets/icon-arrow-down.svg";
import Testimonials from "./components/Testimonials";
import Illustrations from "./components/Illustrations";
import Footer from "./components/Footer";
import Features from "./components/Features";
import { useState } from "react";



const StyledMain = styled.main`
  position: relative;
  min-height: 75vh;
  position: relative;
  z-index: 1;

  background-image: url(${OrangeDesktopImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${ArrowDownSvg});
    background-repeat: no-repeat;
    background-size: auto auto;
    background-position: center center;
  }

  h1 {
    margin-top: 3rem;
    color: white;
    font-size: 3rem;
    letter-spacing: 0.5rem;
    padding: 0 1rem;

    @media screen and (max-width: 400px) {
      font-size: 2.5rem;
    }
    
  }
`;


function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const openMobileNavigation = () => {
    setIsNavOpen(true)
  }

  const closeMobileNavigation = () => {
    setIsNavOpen(false);
  }
  
  return (
    <div>
      <StyledMain>
        <Header isNavOpen={isNavOpen} openMobileNavigation={openMobileNavigation}  closeMobileNavigation={closeMobileNavigation}/>
        <h1>WE ARE CREATIVES</h1>
      </StyledMain>
      <Features />
      <Testimonials />
      <Illustrations />
      <Footer />
    </div>
  );
}

export default App;
