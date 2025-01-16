import React from 'react'

const About = () => {
  return (
    <>
      <section id="about">
    <div className="about">
      <h1>
        <i class="fa-solid fa-user-large"></i>About <span>Me</span>
      </h1>
    </div>
    <div className="box">
      <div>
        <img src="src/image/hero3.png" alt="" />
      </div>
      <div className="detail">
        <h2>I'm Wasim Akram</h2>
        <h3>Frontend Developer</h3>
        <p>
          I am a Frontend Developer based in chandigarh, Punjab, India. 
          I am very passionate about improving my coding skills & developing
          applications & websites. I build WebApps and Websites using MERN
          Stack. Working for myself to improve my skills. Love to build
          Full-Stack clones.
        </p>
        <p>
          <span>Email :</span>
          <a href="mailto:akramwasim19799@gmail">akramwasim19799@gmail </a>
        </p>
        <p>
          <span>Place :</span>Lalru, Chandigarh, Punjab, India - 140501
        </p>
        <div>
        <button className="btn">Resume <i class="fa-solid fa-angles-right fa-sm"></i></button>
      </div>
      </div>
     
    </div>
  </section>
    </>
  )
}

export default About
