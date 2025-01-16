import React from 'react'
import Data from '../Feature/SkillList';

const Skill = () => {
  return (
    <>
      <section id='skills'>
      <div>
      
      <h1><i class="fa-solid fa-laptop-code"></i>Skills</h1>
    </div>
    <div className='container'>
    <div className='skill'>
      <Data/>
    </div>
    </div>
      </section>
    </>
  )
}

export default Skill
