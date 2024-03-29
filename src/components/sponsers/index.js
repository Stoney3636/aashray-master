import React, {Component} from 'react';
import {ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg,ProductImg1, ProductInfo, ProductTitle, ProductDesc, ProductsPara} from './Sponsers';

export default class Events extends Component {
render() {
  return (
    <ProductsContainer id='Events'>
        <ProductsHeading>...Sponsers...</ProductsHeading>
        <ProductsPara> </ProductsPara>
        <ProductWrapper>
                    <ProductCard>
                        <ProductImg src={require("../../images/MPR-spnsr.png")} alt="image" />
                        <ProductInfo>
                            <ProductTitle> MPR Constructions </ProductTitle>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li> MPR Construction is your trusted partner for turning your vision into reality. With a commitment to excellence and quality craftsmanship, we specialize in delivering top-notch construction solutions tailored to meet your needs. From residential projects to commercial ventures, our skilled team ensures attention to detail and timely completion, exceeding expectations every step of the way. With MPR Construction, you can rely on reliability, professionalism, and a dedication to customer satisfaction.  </li>
                                   
        
                            </ul>
                            </ProductDesc>
                            {/* <ProductPrice><h4>fee: Rs.100/-</h4></ProductPrice>
                            <ProductButton onClick={()=>{window.open('https://forms.gle/jcMayL52sHNzBh4s6', '_blank') }}>Register!</ProductButton> */}
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/JCR-spnsr.png")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>JCR Engineering</ProductTitle>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                     <li> JCR Engineering and Infra stands at the forefront of innovation and reliability in the construction industry. With a focus on excellence and sustainability, we bring your projects to life with precision and expertise. From groundbreaking infrastructure developments to intricate engineering marvels, our team's dedication to quality craftsmanship ensures unmatched results every time. </li>
                                    
        
                            </ul>
                            </ProductDesc>
                            {/* <ProductPrice><h4>fee: Rs.100/-</h4></ProductPrice>
                            <ProductButton onClick={()=>{window.open('https://forms.gle/jcMayL52sHNzBh4s6', '_blank') }}>Register!</ProductButton> */}
                        </ProductInfo>
                    </ProductCard>
                   
                
                   
                   
        </ProductWrapper>
    </ProductsContainer>
  )
}}
