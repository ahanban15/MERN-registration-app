// import image into base64 to be able to store into mongoDB

import React from 'react'

export default function convertToBase64(file){
    return new Promise((resolve,reject) => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = () =>{
            resolve(fileReader.result);
        }

        fileReader.onerror = (error) =>{
            reject(error);
        }    
    })
}

