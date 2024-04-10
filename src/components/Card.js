import React, {useState} from 'react'

const Card = (props) => {
    const[showInfo,setShowInfo]=useState(false)
  return (
    <div className="about__item">
        <div className="about__header" onClick={()=> setShowInfo(!showInfo)}>
            <h3 className="about__subtitle">{props.title}</h3>
            <span className="about__icon">{showInfo ? '-': '+'}</span>
        </div>

        <div className={`${showInfo ? 'show-content' : ''} about__content`}>
            <div className="about__date-title">
            <h3 className="about__title">{props.subtitle}</h3>
            <span className="about__date text-cs">{props.date}</span>
            </div>

            <p className="about__description">{props.description}</p>
        </div>
    </div>
  )
}

export default Card