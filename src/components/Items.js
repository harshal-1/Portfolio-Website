import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const Items = ({projectItems}) => {
  return (
    <>
    {projectItems.map((projectItem)=>{
        const{id,img,category,title,description,site}=projectItem;
        return(
            <div className="project__items card card-two" key={id}>
                <div className="project__img-wrapper">
                    <img src={img} alt="" className="project__img" />
                </div>
                <span className="project__category text-cs">{category}</span>
                <h3 className="project__title">{title}</h3>
                <p className="project__description">{description}</p>

                <a href={site} className="link">
                    Visit Site
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>

                
            </div>
        )
    })}
    </>
  )
}

export default Items