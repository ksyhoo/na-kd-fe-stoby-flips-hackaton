import React from 'react'
import './Poster.css';

type Props = {
    img?: string | undefined
}

const Poster: React.FC<Props> = ({ img, children }) => {
    const randomNum = ():string => {
        const random = (Math.floor(Math.random() * 10)*1000000)
        
        return random.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");;
    }
    const reward = randomNum();
  return (
    <div className='layout'>
        <div className='header'>
            <h1><span>⭐</span>WANTED<span>⭐</span></h1>
        </div>
        <div className='row bottom'>
            <div className='column dead_alive'>
                <p>DEAD</p> <p>OR</p> <p>ALIVE</p>
            </div>
            <div className="image">{children}</div>
            {/* <img src={img} className="image" /> */}
            <div className='column'>
                <p>REWARD</p>
                <p>{reward}</p>
            </div>
        </div>
    </div> 
  )
}

export default Poster