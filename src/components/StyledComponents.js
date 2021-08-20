import styled from 'styled-components'


/* Home */

export const SectionContainer = styled.div`
  background-color: ${props => props.getBColor ? props.getBColor : "black"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  //background-repeat: no-repeat;
  min-height: 100vh;
  background-image: url(${props => props.image ? props.image : ""});
  
  &.seccion2{
    background-color: ${props => props.getBColor ? props.getBColor : "#dadada"};
  }
`

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  border: 0;
  --bs-gutter-x: 0rem;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image ? props.image : ""});

`


/* Designs*/

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    &.firt-row{
        padding-top: 5vh;
    }
    @media screen and (max-width:900px){
        flex-direction: column;
    }
`

export const FlexItem = styled.a`
    // Div shape
    height: 50vh;
    flex-grow: 1;
    // Image
    background-image: url(${props => props.image ? props.image : ""});
    background-size: cover;
    background-position: center;
`

export const TitleDisplay = styled.div`
    font-family: "Times New Roman", Times, serif;
    font-size: 100px;
    color: rgb(2, 173, 122);
    text-align: center;
    padding: 15vh 5vw;
    @media screen and (max-width:960px){
        font-size: 50px;
    }
`

export const TextDisplay = styled.div`
    font-family: "Times New Roman", Times, serif;
    font-size: 2rem;
    color: rgb(222, 234, 248);
    text-align: center;
    margin: auto;
    padding: 0 10vw;
    @media screen and (max-width:960px){
        font-size: 1rem;
    }
`


/* Design */

export const FlexPlaneContainer = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
`

export const PlaneContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
    width: 100%;
`

export const PlaneImageContainer = styled.div`
    height: 90%;
    width: 90%;
    margin: 0 5px;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.image ? props.image : ""});
    
    @media screen and (max-width:900px){
        margin: 0;
        height: 80%;
    }
    @media screen and (max-width:800px){
        width: 100%;
    }
    @media screen and (max-width:700px){
        width: 100%;
        height: 70%;
    }
    @media screen and (max-width:600px){
        width: 100%;
        height: 45%;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    height: 15vh;
    width: 100%;
    align-items: center;
    vertical-align: middle;
`

export const ButtonPlane = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #050413;
    height: 100%;
    color: white;
    flex-grow: 1;
`

export const SizeButton = styled.div`
    background-color: #282c34;
    text-align: center;
    vertical-align: middle;
    padding: 14px 0;
`
