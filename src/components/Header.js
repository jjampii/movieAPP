import React from 'react';
import styled from 'styled-components';


function Header() {
  return (
    <Container>
        <span>JAMPLIX</span>
        <div class='search'>
            <input type='text' placeholder=' Search movies'></input>
        </div>
    </Container>
  )
}

export default Header

const Container = styled.div`
width: 100%;
height:60px;
position:fixed;
overflow:hidden;
top:0;
background-color:black;
z-index:10;
display: flex;
justify-content: space-between;
padding: 0 20px;
align-items:center;

span{
    font-weight:800;
    font-size:20px;
    letter-spacing: 1.5px;
}
input{
    padding:5px 10px;
    border-radius:3px;
}

`