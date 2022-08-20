import React from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const StyledHeader = styled.header`
  .header-content {
    padding: 1.5rem 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      margin-bottom: 0;
    }

    .main-title {
      color: white;
      font-size: 1.9rem;
    }

    .mobile-action {
      position: relative;
      z-index: 1000;
      display: flex;
      justify-content: flex-end;
    }

    .mobile-action-icon {
      cursor: pointer;
      fill: white;

      &--open {
        :hover {
          fill: #2f2f2f;
        }
      }

      &--close {
        &:hover {
          fill: red;
        }
      }
      display: none;

      @media screen and (max-width: 767px) {
        display: block;
      }
    }

    .main-nav {
      position: relative;
      z-index: 1000;
      ul {
        display: flex;
        gap: 2rem;

        li {
          a {
            &:hover {
              color: red;
            }
          }
        }

        & > li:not(:last-child) {
          a {
            color: white;
          }
        }

        li:last-child {
          a {
            color: black;
            border-radius: 1000px;
            padding: 0.9rem 2rem;
            background-color: white;
            &:hover {
              background-color: orange;
            }
          }
        }

        li {
          a {
            :hover {
              color: #2f2f2f;
            }
            transition: 0.3s;
          }
        }
      }

      &--is-closed {
        @media screen and (max-width: 767px) {
          ul {
            display: none;
          }
        }
      }

      &--is-open {
        @media screen and (max-width: 767px) {
          position: fixed;
          padding: 4rem 2rem;

          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);

          ::before {
            /* content: ; */
          }

          ul {
            flex-direction: column;
            gap: 4rem;

            li {
              a {
                font-size: 1.3rem;
              }
            }

            li:last-child {
              a {
                color: white;
                border-radius: 0px;
                padding: 0;
                background-color: transparent;

                &:hover {
                  color: #2f2f2f;
                  background-color: transparent;
                }
              }
            }
          }
        }
      }
    }
  }
`;


const Header = ({ isNavOpen, openMobileNavigation, closeMobileNavigation }) => {
  return (
    <StyledHeader isNavOpen={isNavOpen}>
      <div className="header-content">
        <h2 className="main-title">sunnyside</h2>
        <nav
          className={`main-nav ${
            isNavOpen ? "main-nav--is-open" : "main-nav--is-closed"
          } `}
        >
          <div className="mobile-action">
            {!isNavOpen && (
              <FaBars
                onClick={openMobileNavigation}
                color="white"
                fontSize="2rem"
                className="mobile-action-icon mobile-action-icon--open"
              />
            )}
            {isNavOpen && (
              <AiOutlineClose
                onClick={closeMobileNavigation}
                fontSize="2rem"
                className="mobile-action-icon mobile-action-icon--close"
              />
            )}
          </div>
          <ul>
            <li>
              <a href="#" className="nav-item">
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="nav-item">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
