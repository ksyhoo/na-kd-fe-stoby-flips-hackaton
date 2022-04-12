import React, { ChangeEvent, useEffect, useState } from 'react'

type Props = {
    onSelectImage: (event: ChangeEvent<HTMLInputElement>) => void
}

const ImageInput: React.FC<Props> = ({ onSelectImage }) => {
  return (
    <>
      <label>
        <input type="file" multiple onChange={onSelectImage} />
        <i/> Attach
      </label>
    </>
  )
}

export default ImageInput