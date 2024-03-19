import React, {Component} from 'react';
import {ProductsContainer, ProductsHeading, ProductWrapper, ProductCard, ProductImg,ProductImg1, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton, ProductsPara} from './ProductsElements';

export default class Events extends Component {
render() {
  return (
    <ProductsContainer id='Events'>
        <ProductsHeading>...Technical Events...</ProductsHeading>
        <ProductsPara>"Every enterprise is learning and teaching institution. Training and development must be built into it on all levels, training, and development that never stop."</ProductsPara>
        <ProductWrapper>
                    <ProductCard>
                        <ProductImg src={require("../../images/paper.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>☄ Paper Presentation </ProductTitle>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>A Paper presentation combines text and graphics to present the topic in a way that is visually interesting and accessible.</li>
                                    <li> It should clearly articulate what you did, how you did it, why you did it, and what it contributes to your field and the larger field of human knowledge. </li>
        
                            </ul>
                            </ProductDesc>
                            <ProductPrice><h4>fee: Rs.100/-</h4></ProductPrice>
                            <ProductButton onClick={()=>{window.open('https://forms.gle/jcMayL52sHNzBh4s6', '_blank') }}>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/powerpoint.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>PowerPoint Presentation</ProductTitle>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                     <li>A poster presentation combines text and graphics to present the topic in a way that is visually interesting and accessible.</li>
                                    <li> A PPT should clearly articulate what you did, how you did it, why you did it, and what it contributes to your field and the larger field of human knowledge. </li>
        
                            </ul>
                            </ProductDesc>
                            <ProductPrice><h4>fee: Rs.100/-</h4></ProductPrice>
                            <ProductButton onClick={()=>{window.open('https://forms.gle/jcMayL52sHNzBh4s6', '_blank') }}>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg1 className='rufus'src={require("../../images/poster.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>☄Auto CAD Challenge</ProductTitle>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>AutoCAD can be tough to learn because it has many tools and functions to understand and use effectively.</li>
                                    <li>  Using AutoCAD smoothly might need a powerful computer, which could be a challenge for those with older or less capable systems. </li>
        
                            </ul>
                            </ProductDesc>
                            <ProductPrice><h4>fee: Rs.100/-</h4></ProductPrice>
                            <ProductButton onClick={()=>{window.open('https://forms.gle/jcMayL52sHNzBh4s6', '_blank') }}>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/cultural1.jpeg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>💫Treasure Hunt 💥</ProductTitle>
                            <ProductDesc>
                            <ul style={{textAlign: 'left'}}>
                                    <li>Treasure hunts often require participants to work together, pooling their skills and knowledge to solve clues and find hidden treasures.</li>
                                    <li> Participants must use critical thinking and creativity to decipher clues, navigate challenges, and ultimately locate the treasure. </li>
                                    <li>Depending on the setup, treasure hunts can involve competition among teams or individuals, adding an element of excitement and motivation to the challenge. </li>
                                </ul>
                            </ProductDesc>
                            <ProductButton>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/quiz.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>☄ Quiz</ProductTitle>
                            <ProductPrice>Price: Rs.100/-</ProductPrice>
                            <ProductDesc><ul style={{textAlign: 'left',margin:'10px'}}>
                                    <li>A quiz is a game which can also be called a mind sport wherein the players, either as individuals or in teams attempt to answer questions posed to them correctly,</li>
                                    <li>We designed these to promote, a fun way of study and help in the process of improving one's general knowledge.</li>
                                    <li>The very practical goal of  quiz is improve memorizing knowledge of everyone who participated in this event  </li>
                                
                                </ul>
                            </ProductDesc>
                            <ProductPrice><h6>fee: Rs.100/-</h6></ProductPrice> 
                            <ProductButton onClick={()=>{window.open('https://forms.gle/jcMayL52sHNzBh4s6', '_blank') }}>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                    <ProductCard>
                        <ProductImg src={require("../../images/project.jpg")} alt="image" />
                        <ProductInfo>
                            <ProductTitle>☄ Project Exhibition</ProductTitle>
                            <ProductPrice>Price: Rs.100/-</ProductPrice>
                            <ProductDesc><ul style={{textAlign: 'left'}}>
                                    <li>Project Expo is a technical event in which the participants show case their project .they must bring the project to demonstrate them  </li>
                                    <li>These Projects are done by Students of Civil Engineering .</li>
                                    <li> These  Projects will solve  Solutions to Real Time Problems </li>
                                    <li>We can Encourage Project Based Learning  </li>
                                    <li>Peers will Exchange knowledge</li>
                                </ul></ProductDesc>
                            <ProductButton onClick={()=>{window.open('https://forms.gle/jcMayL52sHNzBh4s6', '_blank') }}>Register!</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                
        </ProductWrapper>
    </ProductsContainer>
  )
}}
