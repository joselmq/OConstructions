import React, {useEffect, useState} from "react"
import { TopMenu, Footer } from './Home';
import { image8, image13 } from "../Images/Images"
import { SectionContainer, TitleDisplay, TextDisplay, FlexContainer, FlexItem } from './StyledComponents'
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



function FirstSection(){
    return(
        <SectionContainer getBColor="#050413">
            <TitleDisplay>
                Diseños de casas prefabricadas
            </TitleDisplay>
            <TextDisplay>
                <br/>Selecciona el diseño que quieras. <br/>
                Podrás cotizar y editarlo a tu gusto.
            </TextDisplay>
        </SectionContainer>
    )
}


function ImagesDisplay(){
    var imgUrl8 = image8()
    var imgUrl13 = image13()
    var imageName = "casita"
    var imageName2 = "casota"

    const [data, setData] = useState([]);
    useEffect(()=>{
        var storage = firebase.storage()
        const listItem = () => {
            storage.ref().child('Imágenes/').listAll().then(res => {
                res.items.forEach((item) => {
                    item.getDownloadURL().then(function(url){
                        setData(arr => [...arr, {'name': item.name, 'url': url}]);
                    })
                })
            })
            .catch(err => {
            alert(err.message);
            })
        }
        listItem()
    },[])
    console.log("**data")
    console.log(data)
    return(
        <SectionContainer getBColor="#050413">
            <div>
            {
                data.map((key, index) => ( 
                    <FlexContainer key={`${key.name}_{key.url}`}>
                        <FlexItem image={key.url} href={"/design/" + key.name}/>
                    </FlexContainer>
                ))
            }
            </div>
            <FlexContainer className="firt-row">
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl13} href={"/design/" + imageName2}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName2}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName2}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl13} href={"/design/" + imageName2}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName2}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName2}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl13} href={"/design/" + imageName2}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName2}/>
                <FlexItem image={imgUrl13} href={"/design/" + imageName2}/>
            </FlexContainer>
            <FlexContainer>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
                <FlexItem image={imgUrl8} href={"/design/" + imageName}/>
            </FlexContainer>
        </SectionContainer>
    )
}
