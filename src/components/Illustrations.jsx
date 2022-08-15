import Illustration from './Illustration'
import MilkSkyDesktopImage from '../assets/desktop/image-gallery-milkbottles.jpg'
import orangeOceanDesktopImage from '../assets/desktop/image-gallery-orange.jpg'
import IceCreamDesktopImage from '../assets/desktop/image-gallery-cone.jpg'
import LegoPartsDesktopImage from '../assets/desktop/image-gallery-sugarcubes.jpg'
import styled from 'styled-components'


const StyledIllustrations = styled.section`

  .illustrations-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

`

const ilustrations = [
  MilkSkyDesktopImage,
  orangeOceanDesktopImage,
  IceCreamDesktopImage,
  LegoPartsDesktopImage
] 

const Illustrations = () => {



  console.log("ilustrations", ilustrations)
  
  return (
    <StyledIllustrations>
      <div className="illustrations-content">
        {ilustrations.map((illustration, index) => (
          <Illustration illustration={illustration} key={index}/>
        ))}
      </div>
       
    </StyledIllustrations>
  )
}

export default Illustrations