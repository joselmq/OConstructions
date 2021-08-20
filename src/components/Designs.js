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
                <br/><br/>Selecciona el diseño que quieras y luego podrás cotizar y editarlo a tu gusto.
            </TextDisplay>
        </SectionContainer>
    )
}
function ImagesDisplay(){
    var imgUrl8 = image8()
    var imgUrl13 = image13()
    var imageName = "casita"
    var imageName2 = "casota"
    // useEffect(()=>{
    //     // Create a reference under which you want to list
    //     var storage = firebase.storage()
    //     var storageRef = storage.ref()
    //     var fileRef = storageRef.child('Imágenes/')
    //     // const [Data, setData] = useState("")
    //     var temp = []
    //     storageRef.listAll().then(function (result) {
    //         let path = storageRef.fullPath
    //         path = path.replace(/\b\/\b(?!.*?\b\/\b)/, "%2F");
    //         result.items.forEach(fileRef => {
    //             temp.push({name:  fileRef.name, url: path + "%2F" + fileRef.name +"?alt=media"  })
    //         });
    //         console.log("temp")
    //         console.log(temp)
    //     }).then(()=>{
    //         console.log("hola")
    //         // set data in your any state variable for later use
    //         // setData(temp)
    //         // console.log(Data)    
    //     }).catch(error => {
    //         console.log(error);
    //     })
    // },[])
    // useEffect(()=>{
    //     // Create a reference under which you want to list
    //     var storage = firebase.storage()
    //     var storageRef = storage.ref()
    //     var listRef = storageRef.child('Imágenes/');
    //     var imagesNames = {}
    //     // Find all the prefixes and items.
    //     listRef.listAll().then(function(res) {
    //         res.prefixes.forEach(function(folderRef) {
    //             // All the prefixes under listRef.
    //             // You may call listAll() recursively on them.
    //             console.log("folderRef")
    //             console.log(folderRef)
    //         });
    //         res.items.forEach(function(itemRef) {
    //             // All the items under listRef.
    //             console.log(itemRef._delegate._location.path)
    //             imagesNames.push(itemRef._delegate._location.path)
    //             console.log("imagesNames")
    //             console.log(imagesNames)
    //         });
    //     }).catch(function(error) {
    //         // Uh-oh, an error occurred!
    //         console.log("error")
    //         console.log(error)
    //         console.log("error")
    //     });
    // },[])
    const [data, setData] = useState([]);
    useEffect(()=>{
        var storage = firebase.storage()
        //var storageRef = storage.ref()

        
        const listItem = () => {
            storage.ref().child('Imágenes/').listAll()
                .then(res => {
                    res.items.forEach((item) => {
                        setData(arr => [...arr, item.name]);
                })
            })
                .catch(err => {
                alert(err.message);
            })
        }
        
        listItem()
    },[])
    console.log(data)
    return(
        <SectionContainer getBColor="#050413">
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
