import React from 'react'
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './skills.css'
const Skills = () => {
  return (
    <>
     <section className="skills">
      <h3 className="section__title"><span>My</span> Skills</h3>
      <div className="skills__container grid">
        
      {skills.map(({title,percentage},index)=>{
        return(
          
            <div className="progress__box" key={index}>
                <div className="progress__circle">
                <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage}/>
                </div>
                <h3 className="skills__title">{title}</h3>

               
            </div>
        )
    })}
      </div>
    </section>
   
    </>
  )
}

export default Skills;