import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '../assets/icon-facebook.svg'
import InstagramIcon from '../assets/icon-instagram.svg'
import TwitterIcon from '../assets/icon-twitter.svg'
import PintrestIcon from '../assets/icon-pinterest.svg'


const socialLinksIcons = [
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  PintrestIcon
]


const StyledFooter = styled.footer`

  background-color: hsl(168, 34%, 41%);
  padding: 4rem 0rem;

  .footer-content {
    padding: 0 1.5rem;
  }

  .footer-title {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3rem;
    color: hsl(167, 40%, 24%);
  }

  .footer-site-links {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 5rem;
  }

  .footer-site-link {
    color: hsl(198, 62%, 26%);
    font-size: 1.2rem;
  }
  
  .footer-social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
`


const Footer = () => {


  console.log("socialLinksIcons", socialLinksIcons)
    
  return (
    <StyledFooter>
      <div className="footer-content">
        <h2 className="footer-title">
          sunnyside
        </h2>
        <nav>
          <ul className='footer-site-links'>
            <li>
              <a href='#' className='footer-site-link'>
              About
              </a>
            </li>
            <li>
              <a href='#' className='footer-site-link'>
              Services
              </a>
            </li>
            <li>
              <a href='#' className='footer-site-link'>
              Projects
              </a>
            </li>
          </ul>
          <ul className='footer-social-links'>
            {socialLinksIcons.map(icon => (
              <li>
                <a href='#'>
                  <img src={icon} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
      </div>
    </StyledFooter>
  )
}

export default Footer