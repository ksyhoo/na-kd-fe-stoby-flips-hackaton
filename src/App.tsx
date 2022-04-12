import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import ImageInput from './Components/ImageInput/index';
import ImagePreview from './Components/ImagePreview';

const  App = () => {
  const [selectedImage, setSelectedImage] = useState<File>()
  const [preview, setPreview] = useState<string | undefined>('')

  const onSelectImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    if (!target.files) {
      setSelectedImage(undefined)
      return
    }
    setSelectedImage(target.files[0])
  }

  useEffect(() => {
    if (!selectedImage) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(selectedImage)
    setPreview(objectUrl)

    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedImage])


  return (
    <div className="App">
      <header className="App-header">
        Hello Most Wanted World
       <ImageInput onSelectImage={onSelectImage}/>
       {selectedImage && <ImagePreview img={preview} />}
      </header>
    </div>
  );
}

export default App;
