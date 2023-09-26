import React from 'react'
import { BsArrowUp } from 'react-icons/bs'

function SideCard({ text, primaryText, className, secondaryText, otherText }) {
  return (
    <div className={className}>
      <div className="sideCardHead">
        <span>{text}</span>
      </div>

      <div className="sideCardDetails">
        <div className="sideCardMainText">
          <span>{primaryText}</span>
        </div>

        <div className="sideCardWeightText">
          <BsArrowUp size={16} color="#43d4be" />
          <span>{otherText}%</span>
        </div>

        <div className="sideCardSecondaryText">
          <span>{secondaryText}</span>
        </div>
      </div>
      
    </div>
  )
}

export default SideCard