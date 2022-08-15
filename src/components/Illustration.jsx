import React from 'react'
import styled from 'styled-components'



const styledIllustration = styled.div`
    
`

const Illustration = ({illustration}) => {

    console.log("Illustration", illustration)

  return (
    <styledIllustration>
        <img src={illustration} alt="illustration image" />
    </styledIllustration>
  )
}

export default Illustration