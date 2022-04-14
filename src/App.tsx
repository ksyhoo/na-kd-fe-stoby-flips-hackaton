import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import './App.css';
import ImageInput from './Components/ImageInput/index';
import Poster from './Components/Poster';

type PropsLocation = {
  Poster: Coordinates;
  Hat: Coordinates;
  Glasses: Coordinates;
  Moustache: Coordinates;
};

type Coordinates = {
  Top: number;
  Left: number;
  Width: number;
  Height: number;
};
const App = () => {
  const [coordinates, setCoordinates] = useState<PropsLocation>();
  const [showImage, setShowImage] = useState<boolean>(false);
  const [canvasImage, setCanvasImage] = useState<CanvasImageSource>();
  const [selectedImage, setSelectedImage] = useState<File>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const readImage = (event: ChangeEvent<HTMLInputElement>) => {
    setShowImage(false);
    const { target } = event;
    if (!target.files) {
      setSelectedImage(undefined);
      return;
    }

    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        let imgSrc = '';
        imgSrc = 'https://media.wired.com/photos/592676467034dc5f91beb80e/master/pass/MarkZuckerberg.jpg';
        const img = new Image();
        img.src = imgSrc;
        setCanvasImage(img);
      }
    }
    setSelectedImage(target.files[0]);
  };

  const onUploadPicture = async () => {
    setShowImage(false);
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    const blob = new Blob([selectedImage as BlobPart], {
      type: 'image/png',
    });

    const formData = new FormData();
    formData.append('file', blob);
    const request = await fetch('http://35.195.79.175/MostWanted', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: '*/*',
        'Access-Control-Allow-Origin': '*',
      },
      body: formData,
    });
    const coordinates = await request.json();
    setCoordinates(coordinates);
    if (!!coordinates && !!canvasImage) {
      setShowImage(true);
      context?.drawImage(canvasImage, 10, 10, 100, 100);
    }
  };

  return (
    <div className="App">
      {true ? (
        <Poster img="https://media.wired.com/photos/592676467034dc5f91beb80e/master/pass/MarkZuckerberg.jpg">
          <canvas ref={canvasRef} width={750} height={'100%'} />
        </Poster>
      ) : (
        <>
          <header className="App-header">
            <h2>We need your help in locating a major felon!</h2>
            <p className="text">Advanced AI and machine learn are our only hope,</p>
            <p className="text">Please provide us with a picture and we will do the rest....</p>

            <div className="padding">
              <ImageInput onSelectImage={readImage} />
            </div>
            <button onClick={onUploadPicture}>upload</button>
          </header>
        </>
      )}
    </div>
  );
};

export default App;
