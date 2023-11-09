import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider.js';
import {Link} from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Header from './Header.js';

function Home(props) {

    const IMG_URL = 'http://image.tmdb.org/t/p/original';
  return (
   <Container>
    <Header />
    <ImageSlider />
    <h1> Recommended for you </h1>
    <Wrapper>
     {props.movies.map((movie, index) =>(
        <Slide right duration="1000">
       <Link to={`/detail/${movie.id}`}>
        <ImageContainer>
        <img  key = {movie.id} src={IMG_URL + movie.poster_path} />
       </ImageContainer>
       </Link>
      </Slide>
    )
     )}
    </Wrapper>
    </Container>
  )
  
}

export default Home


const Container = styled.div`
margin-top:60px;

color:white;
padding:20px;
h1{
  margin-bottom:20px;
}
@media (max-width: 450px) {
  height:100vh;
}

`
const Wrapper = styled.div`

    display:grid;
    grid-template-columns : repeat(5, 1fr);
    gap:20px;
   
   &::-webkit-scrollbar {
    display: none;
   }
   

     img{
        width:100%;
        height:100%;
        transition: all 250ms ease-in-out;
        border-radius:20px;
     }
    
     img:hover{
      
      
      width:100%;
        height:100%;
        background-color:red;
        border-radius:20px;
        transform : scale(1.05);
     
     }

     @media (max-width: 450px) {
      grid-template-columns: repeat(2 , 1fr);
      
    }
`
const ImageContainer=styled.div``