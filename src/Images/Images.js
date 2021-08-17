import { useState, useEffect } from 'react'
import firebase from "firebase/app"
import "firebase/storage"
// import React from 'react'

export function GetImage(imagePath){

  const [imageUrl, setImageUrl] = useState()
  
  useEffect(()=>{
    var storage = firebase.storage()
    var storageRef = storage.ref()
    var tangRef = storageRef.child(imagePath)

    tangRef.getDownloadURL().then(function(url){
      console.log(url)
      setImageUrl(url)
    }).catch(function(error){
      console.log(error)
    });
    
    console.log("imageUrl")
    // console.log(imageUrl)
  },[imagePath])
  
  return imageUrl
}

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
