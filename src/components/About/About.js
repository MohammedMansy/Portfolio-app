import React from 'react'
import myphoto from  "./c00b1fc8-ffa8-4093-b376-3d18ca1c199c.jpg"
import "./About.css";

export default function About() {
  return (
    <section className='about'>
      <div className='container'>
        <div className='row' >
            <div className='col-md-6 '>
                <div className='box-image d-flex justify-content-center ' >
                <img className='myself ' src={myphoto} alt=""/>
                </div>
            </div>
            <div className='col-md-6  '>
              <div className=' pt-sm-3 ' >
                <h3 className='tittle-about' > About Me </h3>
                <p className='des-about'>
                    Hello I am Mohammed, I have been developing Websites for over 2 years 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore ab nesciunt voluptate repellat, numquam fugiat sunt pariatur,
                    recusandae, voluptates minima possimus exercitationem omnis eligendi distinctio qui dicta laboriosam assumenda
                    illum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempore ab nesciunt voluptate repellat, numquam fugiat sunt pariatur,
                    recusandae, voluptates minima possimus exercitationem omnis eligendi distinctio qui dicta laboriosam assumenda
                    illum!
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
