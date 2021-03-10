import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Button } from "./button"
import { Title } from "./title"
import BackgroundImage from "gatsby-background-image"
import Footer from "./footer"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact-bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const contactBg = data.file.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="div"
      fluid={contactBg}
      css={`
        height: 100vh;
      `}
    >
      <ContactContainer id="contact">
        <ContactContent>
          <ContactTitle>
            <Title
              css={`
                font-size: clamp(4.2rem, 9vw, 6rem);
              `}
            >
              Get in Touch
            </Title>
          </ContactTitle>
          <ContactForm>
            <input type="email" name="email" placeholder="Your email" />
            <textarea name="message" placeholder="Send your message" />
          </ContactForm>
          <BtnBorder>
            <Button>Send</Button>
          </BtnBorder>
        </ContactContent>
      </ContactContainer>
      <Footer />
    </BackgroundImage>
  )
}

export default Contact

export const ContactContainer = styled.div`
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem calc((100vw - 690px) / 2);
  position: relative;
  color: #fff;

  @media screen and (min-width: 1440px) {
    padding-bottom: 10rem;
  }

  @media screen and (min-width: 1024px) {
    padding-bottom: 5rem;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 100%,
        rgba(0, 0, 0, 0.2) 0%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

export const ContactContent = styled.div`
  padding: 0 1rem;
  width: 100%;
  z-index: 10;
`

export const ContactTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin: 10px 0;
    height: 75px;
    border: none;
    border-radius: 10px 10px 0 0;
    ::placeholder {
      font-size: 1.5rem;
      font-weight: 500;
      color: black;
      position: relative;
      left: 2rem;
      top: 5px;
    }
  }

  textarea {
    margin: 10px 0;
    height: clamp(200px, 33vh, 350px);
    border: none;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
    resize: none;
    ::placeholder {
      font-size: 1.5rem;
      font-weight: 500;
      color: black;
      position: relative;
      left: 2rem;
      top: 5px;
    }
  }
`

export const BtnBorder = styled.div`
  display: flex;
  place-content: center;
  padding: 10px 0;
`