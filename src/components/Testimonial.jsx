import React from 'react'
import styled from 'styled-components'



const StyledTestimonial = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    p {
        margin: 3.5rem 0;   
        line-height: 1.4;
        max-width: 40ch;
    }

    .testimonial-username {
        margin-bottom: 0.5rem;
    }

    .testimonial-user-role {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 767px) {
        p {
            margin: 2rem;
        }
    }

    

    
`
const Testimonial = ({testemonial}) => {
  return (
        <StyledTestimonial>
            <img src={testemonial.img} alt="testimonial user image" />
            <p>
                {testemonial.text}
            </p>
            <h3 className="testimonial-username">
                {testemonial.username}
            </h3>
            <div className="testimonial-user-role">
                {testemonial.userRole}
            </div>
        </StyledTestimonial>
  )
}

export default Testimonial