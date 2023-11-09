import React,{useEffect, useState}from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import Fade from 'react-reveal/Slide';




function Detail() {
    
    const {id} = useParams();
    const [movie, setMovie] = useState([])
    const IMG_URL = 'http://image.tmdb.org/t/p/original';
    


    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/` + id + `?&api_key=725f2e4604b05d196b66f666882b48e2`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data){
               setMovie(data);
               
            }
          
        });
      
      },[]);
    
    
  return (
    
    
   <Container>
            <Fade right duration="500">
        <Backdrop>
            <img src={IMG_URL + movie.backdrop_path}/>
            
        </Backdrop>

        <MainContent>
            <Left>
            <img src={IMG_URL + movie.poster_path}/>
            </Left>
            <Right>
                <h1>{movie.title}</h1>
                <p>Genre: </p>
                <p>Release Date : {movie.release_date} </p>
                 <p>Rating: {movie.vote_average}</p>
                 <h3>Overview</h3>
                <p>{movie.overview}</p>
                <button><span>Play Trailer</span></button>
                
            </Right>

        </MainContent>
            </Fade>
   </Container>
  )
}

export default Detail


const Container = styled.div`


`
const Backdrop = styled.div`
position:relative;
width:100%;
height:50vh;

img{
    position:absolute;
    width:100%;
    height:100vh;
    object-fit:fill ;
    border-radius:10px;
    z-index:-1;
    
    
}
&:after{
    content:"";
    position:absolute;
    width:100%;
    height:100vh;
    background-color:rgba(0,0,0,0.4);
    z-index:-1;
    
    }
    @media (max-width: 450px) {
        display:none;
    }
`


const MainContent = styled.div`
display:flex;
width:70%;
margin-top:-15%;
margin-left:15%;
@media (max-width: 450px) {
    margin:0;
    display:block;
}

`
const Left= styled.div`
margin-right:30px;
img{
    width:300px;
    border-radius:10px;
    }
 @media (max-width: 450px) {
        img{
           
            height:50vh;
            width:100vw;
        }
    }
    
    `
const Right = styled.div`


h3{
    margin-bottom:20px;
}
p{
    margin-bottom:10px;
    
}
button{
    
    padding:10px 40px;
    
    border-radius: 0.2vw;
    margin-right: 20px;
    margin-top: 20px;
    background-color: rgba(51,51,51,0.5);
    color:white;
    font-weight: 800;
    cursor: pointer;
    margin-bottom:20px;
    border:1px solid white;
}
@media (max-width: 450px) {

    position:relative;

    button{
        position: absolute;
        top:-50px;
    }
    button span {
        display:none;
    }
    



`
