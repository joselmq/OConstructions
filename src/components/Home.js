import React  from "react"
// import firebase from "firebase/app"
import "firebase/storage"
import styled from 'styled-components'
import { image6, image8, image13, image15 } from "../Images/Images"

export function Home() {
  return (
    <>
      <div>
        <TopMenu />
      </div>

      <div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>

      <div>
        <Footer />
      </div>

      <div>
        <LateralMenu />
      </div>
    </>
  );
}
export default Home;

export function TopMenu(){
  return(
    <div className="container-fluid top-menu" id="navbar">
      <div className="row flex-items-xs-center slider-1 flex-items-xs-middle" id="top-menu" >
        <div className="col-2" />
        <div className="col-2">
          <a data-scroll href="/" className="btn btn-top-menu" role="button" aria-pressed="true">Home</a>
        </div>
        <div className="col-2">
          <a data-scroll href="#sec-2" className="btn btn-top-menu" role="button" aria-pressed="true">Sección-2</a>    
        </div>
        <div className="col-2">
          <a data-scroll href="#sec-3" className="btn btn-top-menu" role="button" aria-pressed="true">Sección-3</a>
        </div>
        <div className="col-2">
          <a data-scroll href="#sec-4" className="btn btn-top-menu" role="button" aria-pressed="true">Sección-4</a>
        </div>
        <div className="col-2">
          <a data-scroll href="/Profile" className="btn btn-success btn-top-menu" role="button" aria-pressed="true">Perfil</a>
        </div>
      </div>
    </div>
  )
}

// export function GetImage(imagePath){
//   const [imageUrl, setImageUrl] = useState()
//   var storage = firebase.storage()
//   var storageRef = storage.ref()
//   var tangRef = storageRef.child(imagePath)

//   tangRef.getDownloadURL().then(function(url){
//     const  dta = url
//     setImageUrl(dta)
//   }).catch(function(error){
//     console.log(error)
//   });
//   console.log("imageUrl")
//   console.log(imageUrl)
//   return imageUrl
// }

export const SectionContainer = styled.div`
  background-color: ${props => props.getBColor ? props.getBColor : "black"};
  background-repeat: no-repeat;
  height: 100vh;
  background-position: center;
  background-size: cover;
  //background-repeat: no-repeat;
  min-height: 100vh;

  &.seccion1{
    background-image: url(${props => props.image ? props.image : ""};);
  }
  &.seccion2{
    background-color: ${props => props.getBColor ? props.getBColor : "#dadada"};
  }
  &.seccion3{
    background-image: url(${props => props.image ? props.image : ""});
  }
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  border: 0;
  --bs-gutter-x: 0rem;
  background-size: cover;
  background-position: center;

  &.image1{
    background-image: url(${props => props.image ? props.image : ""});
  }
  &.image2{
    background-image: url(${props => props.image ? props.image : ""});
  }
  &.image3{
    background-image: url(${props => props.image ? props.image : ""});
  }
  &.image4{
    background-image: url(${props => props.image ? props.image : ""});
  }
  &.image5{
    background-image: url(${props => props.image ? props.image : ""});
  }
  &.image6{
    background-image: url(${props => props.image ? props.image : ""});
  }
`

export function Section1(){
  var imgUrl = image15()
  return(
    <SectionContainer className="seccion1" getBColor="#282c34" image={imgUrl}>
      {/* <div className="col-xs-12"><img className="img-fondo" src={backgroundImageUrl} alt="100"></img></div> */}
      <div className="row flex-items-xs-center slider-1 flex-items-xs-middle" id="sec-1" >
        <div className="row">
          {/* <Image style={{height: 200, width: 200}} source={{uri: imageUrl}} /> */}
          {/* <div className="col-xs-12"><h3></h3></div> */}
        </div>
      </div>
    </SectionContainer>
  )
}

export function Section2(){
  //#A5A584ff
  return(
    <SectionContainer className="seccion2" getBColor="#263238"> 
      <div className="row flex-items-xs-center slider-2 flex-items-xs-middle" id="sec-2" >
        <h2 className="title-font tracking-in-contract-bck">Ordenes Construcciones</h2>
        <h2 className="text-s2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h2>
      </div>
    </SectionContainer>
  )
}

export function Section3(){
  var imgUrl = image8()
  return(
    <SectionContainer className="seccion3" getBColor="#A5A584ff" image={imgUrl}>
      <div className="row flex-items-xs-center slider-3 flex-items-xs-middle" id="sec-3" >
        <div className="row">
          {/* <div className="col-xs-12"><h1></h1></div>
          <div className="col-xs-12"><h3></h3></div> */}
        </div>
      </div>
    </SectionContainer>
  )
}

export function Section4(){
  var imgUrl6 = image6()
  var imgUrl8 = image13()
  return(
    <div className="container-fluid section-4" id="sec-4">
      
          {/* Row 1 */}
          <div className="row display-img">
            <a className='three-imgs hover-img col-4' data-scroll href="/design">
              <ImageContainer className='hover-img--off image1' image={imgUrl8}/>
              <ImageContainer className='hover-img--on fade-in image6' image={imgUrl6}/>
            </a>
            <a className='three-imgs hover-img col-4' data-scroll href="/design">
              <ImageContainer className='hover-img--off image1' image={imgUrl8}/>
              <ImageContainer className='hover-img--on fade-in image6' image={imgUrl6}/>
            </a>
            <a className='three-imgs hover-img col-4' data-scroll href="/design">
              <ImageContainer className='hover-img--off image1' image={imgUrl8}/>
              <ImageContainer className='hover-img--on fade-in image6' image={imgUrl6}/>
            </a>
          </div>
          {/* Row 2 */}
          <div className="row display-img">
            <a className='three-imgs hover-img col-4' data-scroll href="/design">
              <ImageContainer className='hover-img--off image1' image={imgUrl8}/>
              <ImageContainer className='hover-img--on fade-in image6' image={imgUrl6}/>
            </a>
            <a className='three-imgs hover-img col-4' data-scroll href="/design">
              <ImageContainer className='hover-img--off image1' image={imgUrl8}/>
              <ImageContainer className='hover-img--on fade-in image6' image={imgUrl6}/>
            </a>
            <a className='three-imgs hover-img col-4' data-scroll href="/design">
              <div className="button-mas">Más</div>
              <ImageContainer className='hover-img--off image1' image={imgUrl8}/>
              <ImageContainer className='hover-img--on fade-in image6' image={imgUrl6}/>
            </a>
          </div>
      
    </div>
  )
}

export function Footer(){
  return(
    <div className="container-fluid footer-bar">
      <div className="row flex-items-xs-center slider-3 flex-items-xs-middle">
        <div className="col-xs-12"><h1>Footer</h1></div>
        {/* <div className="col-xs-12"><h3></h3></div> */}
      </div>
    </div>
  )
}

export function LateralMenu(){
  return(
    <div className="lateral-menu vertical-align-parent">
      <div className="flex-items-xs-center slider-3 flex-items-xs-middle vertical-align-child">
        <div className="row-xs-2 vertical-align-child">
          <a data-scroll href="#sec-1" className="menu-btn" role="button" aria-pressed="true">Sección 1</a>
          <a data-scroll href="#sec-2" className="menu-btn" role="button" aria-pressed="true">Sección 2</a>
          <a data-scroll href="#sec-3" className="menu-btn" role="button" aria-pressed="true">Sección 3</a>
          <a data-scroll href="#sec-4" className="menu-btn" role="button" aria-pressed="true">Sección 4</a>
        </div>
      </div>
    </div>
  )
}
