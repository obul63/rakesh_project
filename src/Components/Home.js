import React from 'react'
import pic from './images/team.jpg'
import './Home.css'

import java from './images/java.webp'
import html from './images/HTML-CSS.webp'
import sql from './images/sql.jpg'
import test from './images/testing.jpg'
import js from './images/javascript.jpg'
import react from './images/react.jpg'
import Footer from './Footer.js'
import gif from './images/gif2.webp'
export default function Home() {
  return (
    <>
      <div className='container-fluid p-2' id="back">
        <h1 style={{ paddingTop: '50px' }}></h1>
        <h1 style={{ fontSize: '40px' }}>H! 👋</h1>
        <div className=' p-2'>
          <h1 style={{ fontSize: '40px' }}>we are...</h1><h1 className='typed' id="key"> Web Developer's</h1>
 </div>
       <div className='container-fluid '>
        <div className='row'>
          <div className='col-md-12'>
            <h4 id="p1">While back end developers make sure everything works behind the scenes, front end developers focus on what you see and interact with, making sure it's easy to use and looks good on any device. In short, front end developers turn designs into live websites and apps that people can use.</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <img src={pic} alt='' className='pt-2 img-fluid' id="profile" />
            </div>
        </div>
        
        <div className='row'>
          <div className='col-md-12'>
          <h1 className='d pl-5'>How your vision turns into a success story</h1>
            </div>
        </div>
      
            <div className='row'>
              <div className='col-md-5'>
                <img src={gif} alt='' id="gif" className='img-fluid' />
              </div>
              <div className='col-md-7' >
                <h3 id="h3">We collaborate</h3>
                <p id="p">We don't just work with you, we integrate seamlessly into your team. This lets us easily understand your challenges, leading to solutions you'll love.</p>
                <h3 id="h3">We speed things up</h3>
                <p id="p">Time is precious, so are your goals. We’re ready to jump in and onboard right away, making a difference from the moment we say hello.</p>
                <h3 id="h3">We embrace unique needs</h3>
                <p id="p">One size never fits all. Bringing in 10 years of experience, we adapt our approach to your vision and challenges that arise along the way.</p>
                <h3 id="h3">We dive deep</h3>
                <p id="p">We never settle for good enough. We research, analyze, and immerse ourselves in your industry, ensuring future-proof results.</p>
                <h3 id="h3">We strategize</h3>
                <p id="p">We plan for the long game, not just quick wins. We're in with you from ideation to implementation, and seeing your success as our own.</p>
              </div>
            </div>

    
        </div>
        <div className='row m-2'>
          <center><h1 style={{ fontSize: '70px', color: 'red' }}>Skills</h1></center>
          <div className='col-md-4'>
            <div class="card" id="course">
              <img src={js} class="card-img-top" alt="..." id="img" />
              <div class="card-body" >
                <h5 class="card-title">java Script</h5>
                <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the</p>
                <a href="#" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" id="course">
              <img src={html} class="card-img-top" alt="..." id="img" />
              <div class="card-body">
                <h5 class="card-title">HTML & CSS</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://www.w3schools.com/html/" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
             <div class="card" id="course" >
              <img src={react} class="card-img-top" alt="..." id="img" />
              <div class="card-body">
                <h5 class="card-title">React Js</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div className='row m-2'>

          <div className='col-md-4'>
            <div class="card" id="course">
              <img src={java} class="card-img-top" alt="..." id="img" />
              <div class="card-body">
                <h5 class="card-title">Java</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card" id="course">
              <img src={sql} class="card-img-top" alt="..." id="img" />
              <div class="card-body">
                <h5 class="card-title">Sql</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://www.w3schools.com/sql/" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card" id="course" >
              <img src={test} class="card-img-top" alt="..." id="img" />
              <div class="card-body">
                <h5 class="card-title">Testing</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
     
        </div>
       <div className='container-fluid'>
       <Footer/>
       </div>

      
   
    </>
  )
}