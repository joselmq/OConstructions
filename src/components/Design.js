import React from "react"
import styled from 'styled-components'
import { TopMenu, Footer, LateralMenu, SectionContainer } from './Home';
import { image6 } from "../Images/Images"

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

        <div>
            <LateralMenu />
        </div>
    </>
    )
}

export const PlaneContainer = styled.div`
    height: 60vh;
    width: 60vw;

    &.plano1{
        background-image: url(${image6});
    }
    &.plano2{
        background-image: url(${image6});
    }
    &.plano3{
        background-image: url(${image6});
    }
`;
const SizeButton = styled.div`
    background-color: #282c34;
    text-align: center;
    vertical-align: middle;
    padding: 14px 0;
`



function MainImage(){
  
    return(
        <SectionContainer className="seccion1" getBColor="#050413">
        {/* <div className="col-xs-12"><img className="img-fondo" src={backgroundImageUrl} alt="100"></img></div> */}
        <div className="row flex-items-xs-center slider-1 flex-items-xs-middle" >
            <div className="row">

            </div>
            <div className="row">

            </div>
            <div className="row">

            </div>
        </div>
        </SectionContainer>
    )
}
function SecundaryImage(){

    return(
        <SectionContainer className="seccion3" getBColor="#050413">
        {/* <div className="col-xs-12"><img className="img-fondo" src={backgroundImageUrl} alt="100"></img></div> */}
        <div className="row flex-items-xs-center slider-1 flex-items-xs-middle" >
            <div className="row">

            </div>
            <div className="row">

            </div>
            <div className="row">

            </div>
        </div>
        </SectionContainer>
    )
}

function PlaneImage(){

    return(
        <div style={{backgroundColor:"#050413"}}>
            <div className="row" style={{height:"20vh"}} />

            <div className="row">
                <div className="col" style={{width:"20vw"}} />

                <div className="col">
                    <PlaneContainer className="plano1" getBColor="#050413" />
                </div>

                <div className="col" style={{width:"20vw"}}>
                </div>
            </div>

            <div className="row"  style={{height:"20vh"}}>
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
            </div>
        </div>
    )
}