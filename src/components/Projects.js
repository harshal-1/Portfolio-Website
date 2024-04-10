import React, {useState} from 'react'
import Items from './Items.js'
import { projects } from '../Data.jsx';
import './projects.css'

const Projects = () => {
  const[projectItems,setMenuItems]=useState(projects);

  return (
    <section className="project section" id="work">
      <h2 className="section__title text-cs abcd">Projects</h2>
        {/* <p className="section__subtitle">
            My <span>Talent</span>
        </p> */}

        <div className="project__container container grid">
          <Items projectItems={projectItems} />
        </div>
    </section>
  )
}

export default Projects