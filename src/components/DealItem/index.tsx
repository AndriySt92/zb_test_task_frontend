import React from 'react'
import './style.css'
import { Deal } from '../../interfaces/dealsInterface'

interface Props {
  item: Deal
}

export const DealItem: React.FC<Props> = ({ item }) => {
  return (
    <div className='List__item'>
      <img className='List__item-img' src={item.img_url} alt="Photo of city" />
      <div className='List__item-info'>
        <h4 className='List__item-title'>{item.title}</h4>
        <div className='List__item-details'>
          <div className='List__item-column'>
            <p>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Dhs</p>
            <p>Tiket - {item.ticket.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Dhs</p>
          </div>
          <div className='List__item-column'>
            <p>Yield {(item.yield * 0.01).toFixed(2)}%</p>
            <p>Days left {item.days_left}</p>
          </div>
          <div className='List__item-column'>
            <p>Sold {item.sold}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
