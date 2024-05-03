import React from 'react'
import { DealItem } from '../DealItem'
import './style.css'
import { Deal } from '../../interfaces/dealsInterface'

interface Props {
  deals: Deal[]
}

export const DealList: React.FC<Props> = ({deals}) => {
  return (
    <div className="deal__list">
      <h2 className="deal__list-title">Open Deals</h2>
      <div className="deal__list-items">
        {deals.map((item) => (
          <DealItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  )
}
