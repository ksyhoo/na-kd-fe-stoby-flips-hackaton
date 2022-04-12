import React from 'react'
import './ImagePreview.css';

type Props = {
    img: string | undefined
}

const ImagePreview: React.FC<Props> = ({ img }) => {
  return (
     <img src={img} className="Image" /> 
  )
}

export default ImagePreview