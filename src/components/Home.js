import React from 'react';
import profileimg from "../assets/profileimg.png";
import './home.css';

import {FaTwitter,FaLinkedin} from 'react-icons/fa'

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="home-wrapper">
        <div className="home__container container">
            <p className="home__subtitle text-cs">
                Welcome, <span>My Name Is</span>
            </p>

            <h1 className="home__title text-cs">
                <span>HARSHAL</span> RAJPUT
            </h1>

            <p className="home__job">
                <span className="text-cs">Web Developer</span>
            </p>

            <div className="home__img-wrapper">
                <div className="home__banner">
                    <img src={profileimg} alt="" className="home__profile" />
                </div>

                <p className="home__data home__data-one">
                    <span className="text-lg">
                        5<b>+</b>
                    </span>
                    <span className="text-sm text-cs">
                        Years of<span> Coding</span>
                    </span>
                </p>

                <p className="home__data home__data-two">
                    <span className="text-lg">
                        10
                    </span>
                    <span className="text-sm text-cs">
                        Completed <span>Projects</span>
                    </span>
                </p>


            </div>

            <p className="home__text">
                Software Enthusiast who is always ready to discover and try out new Stuff. Currently learning Web Development.
            </p>

            <div className="home__socials">
                <a href="https://twitter.com/Harshal__Rajput" className="home__social-link">
                    <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/in/harshal-rajput-94755a228/" className="home__social-link">
                    <FaLinkedin />
                </a>
            </div>

            <div className="home__btns">
                <a href='https://drive.google.com/file/d/1ax_zYBK2_YIr0ROAi-jPZHi0qQCOez4f/view?usp=sharing' className="btn text-cs">
                    Resume
                </a>
                <a href="#skills" className="hero__link text-cs">
                    My Skills
                </a>
            </div>
        </div>
        </div>

    </section>
  )
}

export default Home