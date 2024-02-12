import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);


  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <form action="https://formspree.io/f/mkndrgzy"
  method="POST" className="FORME"
        >
          {/* <ContactForm> */}
            <div className="contact-title ">Email Me 🚀</div>
            <input className="contact-input" autoComplete="on" placeholder="Your Email" name="from_email" />
            <input className="contact-input" autoComplete="on" placeholder="Your Name" name="from_name" />
            <input className="contact-input" autoComplete="on" placeholder="Subject" name="subject" />
            <textarea className="contact-input-message " autoComplete="on" placeholder="Message" rows="4" name="message" />
            <button className="contact-button " >Send</button>
          {/* </ContactForm> */}
        </form>
      </Wrapper>
    </Container>
  );
};

export default Contact;
