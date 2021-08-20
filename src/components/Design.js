import React from "react"
import { TopMenu, Footer } from './Home';
import { image6 } from "../Images/Images"
import { PlaneContainer, PlaneImageContainer, FlexPlaneContainer, ButtonsContainer, ButtonPlane } from './StyledComponents'
import { SectionContainer, TitleDisplay, TextDisplay } from './StyledComponents'

export default function DesignMediterraneo() {
    return (
    <>
        <div>
            <TopMenu />
        </div>

        <div>
            <MainImage />
        </div>
        <div>
            <SecundaryImage />
        </div>
        <div>
            <PlaneImage />
        </div>

        <div>
            <Footer />
        </div>
    </>
    )
}





function MainImage(){
  
    return(
        <SectionContainer getBColor="#050413">
            <TitleDisplay>
                Diseño <br /> Casita Mediterranea
            </TitleDisplay>
            <TextDisplay>
               <br/>Revisa nuestros modelos. Podrás cotizar y editarlo a tu gusto.
            </TextDisplay>
        </SectionContainer>
    )
}
function SecundaryImage(){
    return(
        <SectionContainer className="seccion3" getBColor="#263238">
        </SectionContainer>
    )
}

function PlaneImage(){
    var imgUrl6 = image6()
    return(
        <SectionContainer getBColor="#282c34">
            <FlexPlaneContainer>
                <PlaneContainer>
                    <div className="prev" />
                    <PlaneImageContainer image={imgUrl6}/>
                    <div className="next" />
                </PlaneContainer>
                <ButtonsContainer>
                    <ButtonPlane>42</ButtonPlane>
                    <ButtonPlane>54</ButtonPlane>
                    <ButtonPlane>72</ButtonPlane>
                    <ButtonPlane>100</ButtonPlane>
                </ButtonsContainer>

            </FlexPlaneContainer>

            {/* <div className="row"  style={{height:"20vh"}}>
                <div className="row"  style={{height:"30%"}} />
                <div className="row"  style={{height:"40%"}}>
                    <div className="col-2" />
                    <SizeButton className="col-2" style={{textAlign:"center"}}>
                        <div className="btn btn-top-menu " role="button" aria-pressed="true">42 M2</div>
                    </SizeButton>
                    <SizeButton className="col-2" style={{textAlign:"center"}}>
                        <div className="btn btn-top-menu" role="button" aria-pressed="true">54 M2</div>    
                    </SizeButton>
                    <SizeButton className="col-2" style={{textAlign:"center"}}>
                        <div className="btn btn-top-menu" role="button" aria-pressed="true">72 M2</div>
                    </SizeButton>
                    <SizeButton className="col-2" style={{textAlign:"center"}}>
                        <div className="btn btn-top-menu" role="button" aria-pressed="true">100 M2</div>
                    </SizeButton>
                </div>
                <div className="row"  style={{height:"30%"}} />
            </div> */}
        </SectionContainer>
    )
}