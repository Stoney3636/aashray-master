import React, {Component} from 'react';
import {ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton, ProductsPara} from './workshopElements';

export default class Workshop extends Component {
render() {
  return (
    <ProductsContainer id='Workshops'>
        <ProductsHeading>WORK SHOPS</ProductsHeading>
        <ProductsPara>"Civil engineering is the bridge between science and practice"</ProductsPara>
        <ProductWrapper>
                    <ProductCard>
                        <ProductImg className='workshop-img' src={require("../../images/workshop1.jpeg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>DGPS-Differential Global Positioning Systems</ProductTitle>
                           
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>DGPS  uses the reference location of the base receiver to correct for the error position of the unknown rover position </li>
                                    <li> Differential Global Positioning System (DGPS) is an enhancement to Global Positioning System that provides improved location accuracy </li>
                                    <li>DGPS radio beacon systems operate in many parts of the world</li>
                                
                                </ul>
                            </ProductDesc>

                            <ProductPrice>Accomodation Fee For all Events - 200/-</ProductPrice>
                            <ProductButton onClick={()=>{window.open('https://docs.google.com/forms/d/e/1FAIpQLSfKMLN-bAJP4LIG00mPVuFSvF-2GQopcQiuClxbwjzwZTRfDw/viewform', '_blank') }}>Register!</ProductButton>
                    
                        </ProductInfo>
                    </ProductCard>
                 
          
                
        </ProductWrapper>
    </ProductsContainer>
  )
}}
