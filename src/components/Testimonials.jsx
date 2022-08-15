import React from 'react'
import styled from 'styled-components'
import EmilyImage from '../assets/image-emily.jpg'
import JennieImage from '../assets/image-jennie.jpg'
import ThomasImage from '../assets/image-thomas.jpg'
import Testimonial from './Testimonial'


const testimonialsList = [
    {
        img: EmilyImage,
        text: "We put our trus in sunny and they delivered. making sure our need were met and deadlines were always hit.",
        username: "Emily R.",
        userRole: "Marketing Director"
    },
    {
        img: JennieImage,
        text: "Sunnyside's enthusiasm coupled with thier keen interst in our brand;s success made it a satifing and enjoyable experience.",
        username: "Thomas S.",
        userRole: "Chef Operating Oficcer"
    },
    {
        img: ThomasImage,
        text: "Incredible end result! Our sales increaed over 400% when we worked with Sunnyside. Highly recomended!",
        username: "Jenneie F.",
        userRole: "Business Owner"
    },

  ] 

const StyledTestimonials  = styled.section`
  padding: 6rem 2rem;
  text-align: center;

  .testimonial-header {
    font-size: 1.4rem;
    letter-spacing: 4px;
    margin-bottom: 4rem;
  }
  
  .testimonials-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
    
  }

`

const Testimonials = () => {

      
  return (
    <StyledTestimonials>
    <div className="testimonials-content">
        <header>
            <h2 className='testimonial-header'>
                CLIENT TESTIMONIALS
            </h2>
        </header>
        <div className="testimonials-list">
        {testimonialsList.map(testimonial => (
            <Testimonial testemonial={testimonial} />
        ))}
        </div>
    </div>
    </StyledTestimonials>
  )
}

export default Testimonials