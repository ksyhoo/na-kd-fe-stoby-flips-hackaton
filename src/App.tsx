import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './App.css';
import ImageInput from './Components/ImageInput/index';

type PropsLocation = {
  Poster:Coordinates
  Hat:Coordinates
  Glasses:Coordinates
  Moustache:Coordinates
}

type Coordinates=  {
  Top: number
  Left:number
  Width:number
  Height:number

}
const  App = () => {
  const [coordinates, setCoordinates] = useState<PropsLocation>()
  const [showImage, setShowImage] = useState<boolean>(false)
  const [canvasImage, setCanvasImage] = useState<CanvasImageSource>()
  const [selectedImage, setSelectedImage] = useState<File>()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const  readImage = (event: ChangeEvent<HTMLInputElement>) => {
    setShowImage(false)
    const { target } = event;
    if (!target.files) {
      setSelectedImage(undefined)
      return
    }
    
    if (canvasRef.current) {
       const context = canvasRef.current.getContext("2d");
      if (context) {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        let imgSrc = '';
        imgSrc = window.URL.createObjectURL(target.files[0]);
          const img = new Image();
        img.onload = function() {
          context.drawImage(img, 0, 0);
        }
        img.src = imgSrc;
        setCanvasImage(img)
      }
    }
    setSelectedImage(target.files[0])
  }

  const onUploadPicture = async () => {
    setShowImage(false)
    const blob = new Blob([selectedImage as BlobPart], {
      type: 'image/png',
    });

    const formData = new FormData();
    formData.append("file", blob);

    const request = await fetch("http://most-wanted-api.free.beeceptor.com", {
        method: "POST",
        body: formData,
    })

    const coordinates = await request.json()
    setCoordinates(coordinates)
    if (!!coordinates) {
      setShowImage(true)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (canvasImage) {

    //Fix those values to one from API
    //drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
    //sx sy  start crop from left/top of the original  image
    //sw, sh  crop the w x h pixel area from the original image
    //dx , dy place result of the image at top left of canvas
    //dw, dh width and  height of result image

      context?.drawImage(canvasImage, 20, 20, 120, 120, 0, 0, 100, 100);
    }
  }, [canvasImage])

  return (
    <div className="App">
      <header className="App-header">
        Hello Most Wanted World
       <ImageInput onSelectImage={readImage}/>
       <button onClick={onUploadPicture}>upload</button>
       {showImage && <canvas ref={canvasRef} width={750} height={'100%'}/>}
      </header>
    </div>
  );
}

export default App;
