import React, {useState} from 'react';
import './SeatSlot.css';

function Cell ({filled, onClick}) {
    return <button type='button'
                    onClick={onClick}
                    className={filled ? "cell cell-activated" : "cell"}
            />
}

const SeatSlot = () => {
    const [order, setOrder] = useState([]);
    const config = [
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1]
      ]
    
      const activateCells = (index) => {
        const newOrder = [...order, index]
        setOrder(newOrder)
      }

  return (
        <div className='wrapper'>
      <div className='grid' style={{gridTemplateColumns: `repeat(${config[0].length}, 1fr)`}}>
      {config.flat(1).map((value, index) => {
        return value ? <Cell
          key={index}
          onClick={() => activateCells(index)}
          filled={order.includes(index)}
        /> : <span />
      })}
    </div>
    <div className='booking'>
      <div className='booking__details'>
        <p>Total seats: {order.reduce(index => index+1, 0)}</p>
        <p>Price: {}</p>
      </div>
      <button className='booking__btn'>Book</button>
    </div>
    </div>
  )
}

export default SeatSlot;
