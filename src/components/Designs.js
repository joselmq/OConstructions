import React, {useEffect} from "react"
import styled from 'styled-components'
import { TopMenu, Footer, SectionContainer } from './Home';
import { image8, image13 } from "../Images/Images"
import firebase from "firebase/app"
import "firebase/storage"

export default function DesignMediterraneo() {
    

    return (
    <>
        <div>
            <TopMenu />
        </div>

        <div>
            <FirstSection />
        </div>
        <div>
            <ImagesDisplay />
        </div>


        <div>
            <Footer />
        </div>

    </>
    )
}

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    &.firt-row{
        padding-top: 5vh;
    }    
    @media screen and (max-width:960px){
        flex-direction: column;
    }
    @media screen and (max-width: 600px){
        flex-direction: column;
    }
`;
const FlexItem = styled.a`
    // Div shape
    height: 50vh;
    flex-grow: 1;
    // Image
    background-image: url(${props => props.image ? props.image : ""});
    background-size: cover;
    background-position: center;


`;
const TitleDisplay = styled.div`
    font-family: "Times New Roman", Times, serif;
    font-size: 100px;
    color: rgb(2, 173, 122);
    text-align: center;
    padding-top: 20vh !important;
    @media screen and (max-width:960px){
        font-size: 50px;
    }
`

const TextDisplay = styled.div`
    font-family: "Times New Roman", Times, serif;
    font-size: 2rem;
    color: rgb(222, 234, 248);
    text-align: center;
    margin: auto;
    @media screen and (max-width:960px){
        font-size: 1rem;
    }
`


function FirstSection(){
    return(
        <SectionContainer getBColor="#050413">
            <TitleDisplay>
                Diseños de casas prefabricadas
            </TitleDisplay>
            <TextDisplay>
                <br/><br/>Selecciona el diseño que quieras y luego podrás cotizar y editarlo a tu gusto.
            </TextDisplay>
        </SectionContainer>
    )
}
function ImagesDisplay(){
    var imgUrl8 = image8()
    var imgUrl13 = image13()
    var imageName = "casita"
    useEffect(()=>{
        // Create a reference under which you want to list
        var storage = firebase.storage()
        var storageRef = storage.ref()
        var listRef = storageRef.child('Imágenes/');
        // Find all the prefixes and items.
        listRef.listAll().then(function(res) {
            res.prefixes.forEach(function(folderRef) {
                // All the prefixes under listRef.
                // You may call listAll() recursively on them.
                console.log("folderRef")
                console.log(folderRef)
            });
            res.items.forEach(function(itemRef) {
                // All the items under listRef.
                console.log(itemRef._delegate._location.path)
            });
        }).catch(function(error) {
            // Uh-oh, an error occurred!
            console.log("error")
            console.log(error)
            console.log("error")
        });
    },[])

    return(
        <SectionContainer getBColor="#050413">
            <FlexContainer className="firt-row">
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl13} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl13} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl13} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
            </FlexContainer>
        </SectionContainer>
    )
}
