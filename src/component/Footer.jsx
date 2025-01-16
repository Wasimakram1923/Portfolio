import React from 'react'

const Footer = () => {
  return (
    <section id="footer">
    <div class="footer">
      <div class="foot">
        <h2>Wasim Portfolio</h2>
        <p>
          Thank you for visiting my personal portfolio website. 
         Connect with me over socials.
          </p>
      </div>

      {/* <div class="foot">
        <h3>quick links</h3>
        <a href="#home"><i class="fas fa-chevron-circle-right"></i> home</a>
        <a href="#about"><i class="fas fa-chevron-circle-right"></i> about</a>
        <a href="#skills"><i class="fas fa-chevron-circle-right"></i> skills</a>
        <a href="#education"><i class="fas fa-chevron-circle-right"></i> education</a>
        <a href="#work"><i class="fas fa-chevron-circle-right"></i> work</a>
        <a href="#experience"><i class="fas fa-chevron-circle-right"></i> experience</a>
      </div> */}

      <div class="foot">
        <h2>contact info</h2>
        <p><i class="fas fa-phone"></i>+91 XXX-XXX-XXXX</p>
        <p><i class="fas fa-envelope"></i>akramwasim19799@gmail.com</p>
        <p><i class="fas fa-map-marked-alt"></i>Lalru, Chandigarh, Punjab, India - 140501</p>
        <div class="share">
          <a href="https://www.linkedin.com/in/wasim-akram-ab7224345/" class="fab fa-linkedin" aria-label="LinkedIn" target="_blank"></a>
          <a href="https://github.com/Wasimakram1923" class="fab fa-github" aria-label="GitHub" target="_blank"></a>
          <a href="mailto:akramwasim19799@gmail.com" class="fas fa-envelope" aria-label="Mail" target="_blank"></a>
          {/* <a href="" class="fab fa-twitter" aria-label="Twitter" target="_blank"></a>
          <a href="" class="fab fa-telegram-plane" aria-label="Telegram" target="_blank"></a> */}
          <a href="https://www.instagram.com/itz_khan_.09" class="fab fa-instagram " aria-label="Instagram" target="_blank"></a>
        </div>
      </div>
    </div>
    <br/>
    <h1 class="credit">
   <span> &copy;</span> 2025 Wasim Akram, All rights reserved.
    </h1>
  </section>
  )
}

export default Footer

