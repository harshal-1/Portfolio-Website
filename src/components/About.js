import React from 'react';
import {cv} from '../Data.jsx'
import Card from './Card.js'
import './about.css';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title text-cs abcd">About</h2>
        {/* <p className="section__subtitle">
            My <span>Talent</span>
        </p> */}

        <div className="about__container container grid">

            <div className="about__group">
                <h3 className="about__heading">Education</h3>

                <div className="about__items">
                    {cv.map((val,id)=>{
                        if(val.category === 'education'){
                            return(
                                <Card 
                                key={id} 
                                title={val.title} 
                                subtitle={val.subtitle} 
                                date={val.date} 
                                description={val.description}
                                />
                            )
                        }
                    })}
                </div>
            </div>

            <div className="about__group">
                <h3 className="about__heading">Interests</h3>

                <div className="about__items">
                    {cv.map((val,id)=>{
                        if(val.category === 'interests'){
                            return(
                                <Card 
                                key={id} 
                                title={val.title} 
                                subtitle={val.subtitle} 
                                date={val.date} 
                                description={val.description}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default About