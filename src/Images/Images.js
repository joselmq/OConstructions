import { useState, useEffect } from 'react'
import firebase from "firebase/app"
import "firebase/storage"
// import React from 'react'

export function GetImage(imagePath){
  // console.log("imagePath")
  // console.log(imagePath)

  const [imageUrl, setImageUrl] = useState()
  
  useEffect(()=>{
    var storage = firebase.storage()
    var storageRef = storage.ref()
    var tangRef = storageRef.child(imagePath)

    tangRef.getDownloadURL().then(function(url){
      // console.log(url)
      setImageUrl(url)
    }).catch(function(error){
      console.log(error)
    });
    
    // console.log("imageUrl")
    // console.log(imageUrl)
  },[imagePath])
  
  return imageUrl
}





// export function GetAllImages(){
//   const [data, setData] = useState([]);
//   useEffect(()=>{
//     var storage = firebase.storage()
//     const listItem = () => {
//       storage.ref().child('Imágenes/').listAll()
//         .then(res => {
//           res.items.forEach((item) => {
//             // setData(arr => [...arr, item.name]);
//             setData(arr => [...arr, item.name]);
//         })
//       })
//         .catch(err => {
//         alert(err.message);
//       })
//     }
//     listItem()
//   },[])
//   return data
// }

// export function GetAllImages(imageName){

//   const [Switch, setSwitch] = useState(True)
//   const [imageUrl, setImageUrl] = useState()
  
//   if (Switch){
//     useEffect(()=>{
//       var storage = firebase.storage()
//       var storageRef = storage.ref()
//       var tangRef = storageRef.child("Imágenes/" + imageName)

//       tangRef.getDownloadURL().then(function(url){
//         console.log(url)
//         setImageUrl(url)
//       }).catch(function(error){
//         console.log(error)
//       });
      
//       console.log("imageUrl")
//       // console.log(imageUrl)
//     },[])
//   }
//   return imageUrl
// }

// export function GetAllImages(imageName){
//   const [Files, setFiles] = useState("s")
//   useEffect(() => {
//     var storage = firebase.storage()
//     var storageRef = storage.ref()
//     const fetchImages = async () => {
//       let result = await storageRef.child("Imágenes/" + imageName).listAll();
//       let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL());
//       return Promise.all(urlPromises);
//     }

//     const loadImages = async () => {
//       const urls = await fetchImages();
//       setFiles(urls);
//     }
//     loadImages();
//   }, []);
//   console.log("Files")
//   console.log(Files)
// }


export function image1(){
  var imageUrl = GetImage("Imágenes/1.jpeg")
  return imageUrl
}
export function image2(){
  var imageUrl = GetImage("Imágenes/2.jpeg")
  return imageUrl
}
export function image3(){
  var imageUrl = GetImage("Imágenes/3.jpeg")
  return imageUrl
}
export function image4(){
  var imageUrl = GetImage("Imágenes/4.jpeg")
  return imageUrl
}
export function image5(){
  var imageUrl = GetImage("Imágenes/5.jpeg")
  return imageUrl
}
export function image6(){
  var imageUrl = GetImage("Imágenes/6.jpeg")
  return imageUrl
}
export function image7(){
  var imageUrl = GetImage("Imágenes/7.jpeg")
  return imageUrl
}
export function image8(){
  var imageUrl = GetImage("Imágenes/8.jpeg")
  return imageUrl
}
export function image9(){
  var imageUrl = GetImage("Imágenes/9.jpeg")
  return imageUrl
}
export function image10(){
  var imageUrl = GetImage("Imágenes/10.jpeg")
  return imageUrl
}
export function image11(){
  var imageUrl = GetImage("Imágenes/11.jpeg")
  return imageUrl
}
export function image12(){
  var imageUrl = GetImage("Imágenes/12.jpeg")
  return imageUrl
}
export function image13(){
  var imageUrl = GetImage("Imágenes/13.jpeg")
  return imageUrl
}
export function image14(){
  var imageUrl = GetImage("Imágenes/14.jpeg")
  return imageUrl
}
export function image15(){
  var imageUrl = GetImage("Imágenes/15.jpeg")
  return imageUrl
}
export function image16(){
  var imageUrl = GetImage("Imágenes/16.jpeg")
  return imageUrl
}
