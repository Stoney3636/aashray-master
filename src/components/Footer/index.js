import React from 'react'
import './FooterElements';
import { FaEnvelope, FaInstagram,  FaYoutube,FaWhatsapp } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, Copyrights } from './FooterElements';
import './footer.css'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialLogo to='/'>Contact Us</SocialLogo>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label="Facebook" rel="noopener noreferrer" >
                        <FaEnvelope onClick={()=>window.open(`mailto:aashrayjntuacep@gmail.com`,`_blank`)}/>
                    </SocialIconLink>
                    <SocialIconLink href='https://www.instagram.com/aashrayjntuacep/' target='_blank' aria-label="Instagram" rel="noopener noreferrer" >
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='https://youtube.com/@aashrayjntuacep?si=3DtTZkb29iMZ9Ohn' target='_blank' aria-label="Youtube" rel="noopener noreferrer" >
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label="whatsapp" rel="noopener noreferrer" >
                        <FaWhatsapp onClick={()=>{alert("whatsapp To:8978683528 after copying number hit okay...")
                    window.location.href = "https://api.whatsapp.com/send?phone=``"
                    }}/>
                    </SocialIconLink>
                </SocialIcons>
            </SocialMedia>
            <hr />
            <div className='co-ordinators'>
           <h5>Faculty Co-Ordinator:</h5>
            <p>B L.Niranjan reddy - +917981422494</p>
            <h5>Student Co-Ordinators:</h5>
            <p>Ch.Sai Pavan Kumar - +918978683528</p>
            <p>V.Venkat sai Reddy - +9014170095</p>
            <p>H.Shahid - +917816043049</p>
            <p>A.Pravallika - +917674094869</p>
            </div>
            <Copyrights>&#64; 2024 Copyright AASHRAY 2K24.com All Rights Reserved</Copyrights>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer