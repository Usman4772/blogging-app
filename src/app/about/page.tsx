import React from 'react'
import "./about.css"
import Link from 'next/link'
import Nav from '@/components/NavBar/Nav'
function About() {
  return (
    <div>
      <Nav showSearchBar={false}/>
      <section className="about section relative top-[5vh]">
    <h2 className="section__title mt-12">
      My Personal <br/>
      Information
    </h2>
  
    <div className="about__container about__page container grid w-[94%]">
      <div className="about__perfil perfil">
        <div className="perfil__content">
          <img src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww"  alt="image" className="perfil__img"/>
        </div>
      </div>
  
      <div className="about__content grid">
        <div className="about__data grid">
          <div className="about__info grid">
            <h1 className="about__name">Usman Ali</h1>
            <h2 className="about__profession">Junior MERN Developer</h2>
            <p className="about__description">
              Passionate about creating <b>Web Pages</b> with
              <b>UI/UX User Interface</b>, I have more than 2 years of
              experience and many clients are happy with
              the projects carried out.
            </p>
          </div>
  
          <Link href="/" className="about__button button bg-customYellow">Contact Me</Link>
        </div>
  
        <div className="about__skills">
          <h3 className="about__skills-title">My Skills Are</h3>
  
          <div className="about__skills-content grid">
  
            <div className="about__skills-img">
              <img src="https://cdn.worldvectorlogo.com/logos/html-1.svg" alt="image HTML" className="about__skills-img"/>
              <p className="about__skills-hover-text">HTML</p>
            </div>
  
            <div className="about__skills-img">
              <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="image CSS" className="about__skills-img"/>
              <p className="about__skills-hover-text">CSS</p>
            </div>
  
            <div className="about__skills-img">
              <img src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg" alt="image JavaScript" className="about__skills-img"/>
              <p className="about__skills-hover-text">JavaScript</p>
            </div>
  
            <div className="about__skills-img">
              <img src="https://cdn.worldvectorlogo.com/logos/sass-1.svg" alt="image SASS" className="about__skills-img"/>
              <p className="about__skills-hover-text">SASS</p>
            </div>
  
            <div className="about__skills-img">
              <img src="https://cdn.worldvectorlogo.com/logos/nodejs-1.svg" alt="image Node.js" className="about__skills-img"/>
              <p className="about__skills-hover-text">Node.js</p>
            </div>
  
            <div className="about__skills-img">
              <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="image React" className="about__skills-img"/>
              <p className="about__skills-hover-text">React</p>
            </div>
  
            <div className="about__skills-img">
              <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="image Redux" className="about__skills-img"/>
              <p className="about__skills-hover-text">Redux</p>
            </div>
  
            <div className="about__skills-img">
              <img src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" alt="image Git" className="about__skills-img"/>
              <p className="about__skills-hover-text">Git</p>
            </div>
  
            <div className="about__skills-img">
              <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="image GitHub" className="about__skills-img"/>
              <p className="about__skills-hover-text">GitHub</p>
            </div>
  
           
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default About