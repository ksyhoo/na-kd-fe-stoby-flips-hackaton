import React from 'react'
import './ErrorMessage.css'

const ErrorMessage: React.FC = () => {
    const errors = [
        'Our servers are too busy for your request, but we will keep your photo, thanks! 😄',
        'A cat is messing with the servers, will be back after we feed him',
        'Something happened, but I am not telling you what.'
    ];
    const randomError = Math.floor(Math.random()*errors.length);
  return (
    <>
      <p className='error'>{errors[randomError]}</p>
    </>
  )
}

export default ErrorMessage