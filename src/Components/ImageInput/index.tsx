import React, { ChangeEvent, useEffect, useState } from 'react';
import '../../App.css';
type Props = {
  onSelectImage: (event: ChangeEvent<HTMLInputElement>) => void;
};

const ImageInput: React.FC<Props> = ({ onSelectImage }) => {
  return (
    <>
      <label className="padding">
        <input type="file" multiple onChange={onSelectImage} />
      </label>
    </>
  );
};

export default ImageInput;
