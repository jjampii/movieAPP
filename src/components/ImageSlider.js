import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ImageSlider() {

  let settings = {
    dots : true, 
    infinite : true,
    speed : 500,
    slidesToShow : 1,
    slidestoScroll:1,
    autoplay:true
  }
  return (
    <Carousel {...settings}>
      <Wrapper>
        <Content>
        <h1>Stranger Things</h1>
        <p>In a small town where everyone knows everyone, a peculiar incident starts a chain of events that leads to a child's disappearance, which begins to tear at the fabric of an otherwise-peaceful community. Dark government agencies and seemingly malevolent supernatural forces converge on the town, while a few of the locals begin to understand that more is going on than meets the eye</p>
        <button>Play</button>
        <button>Know more</button>
        </Content>
          <img src="images/slider2.jpg"/>
        </Wrapper>
        <Wrapper>
          <Content>
            <h1>Money Heist</h1>
            <p>To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion memorizing every step, every detail, every probability culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, ...</p>

            <button>Play</button>
            <button>Know more</button>
            </Content>
          <img src="images/slider1.jpg"/>
          
        </Wrapper>
        
        <Wrapper>
        <Content>
        <h1>Doctor Strange in the Multiverse of Madness</h1>
        <p>Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.</p>
        <button>Play</button>
        <button>Know more</button>
        </Content>
          <img src="images/slider4.webp"/>
        </Wrapper>
        
    </Carousel>
  )
}

export default ImageSlider

const Carousel = styled(Slider)`
width:100%;
height:60vh;
margin-bottom:50px;


ul li button{
 
  &:before{
    padding-top:10px;
    font-size:16px;
    color:white;
  }
  
}

.slick-arrow{
  &:before{
    display:none;

  }
}
li.slick-active button{
  &:before{
    color:white;
  }
}
@media (max-width: 450px) {

  height:50vh;
}
`;
const Wrapper = styled.div`

position:relative;
height:60vh;


img{
  position:absolute;
  top:0;
  width:100%;
  height: 100%;
  z-index:-1;
  object-fit: fill;
  border-radius:10px;
  opacity:0.8;

  
}
@media (max-width: 450px) {
  img{
    height:82%;
  }
}


`;

const Content = styled.div`
padding:30px 50px;
width: 80vw;



h1{
  font-size: 30px;
  font-weight:800;
}
p{
  max-height:200px;
  width: 50vw;
  font-weight:600;
  font-size:12px;
}
button{
  padding:10px 20px;
  border-radius: 0.2vw;
  background-color: rgba(51,51,51,0.7);
  border:none;
  font-weight: 800;
  cursor: pointer;
  color:white;
  font-size:10px;
  
  margin-top:20px;
  margin-right:20px 
}
@media (max-width: 450px) {
 
position:relative;
margin-top:60%;
  width: 100%;
  height:100%;
text-align :center;

 
  padding:10px 20px;

  h1{
    
    font-size:25px;
  }
  p{
   display: none;
  }
  button{
   margin: 20px auto;
   margin-right:10px;
   
  }
}

`