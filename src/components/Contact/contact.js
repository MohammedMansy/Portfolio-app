import React from 'react';
import "./style.css";

const Contact = () => {
  return (
    <section className='contact py-5 '>
      <h2 className=' main-title text-center text-uppercase py-5' > contact Me </h2>
      <p className=' text-center text-white des-contact '> please fill out the form and describe you project needs and i will contact you as soon as possiable </p>
      <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
            <div className='row'>
                <div className='col-md-12'>
                <input type="text" placeholder='Name'/>
                </div>
                <div className='col-md-12' >
                    <input type="number" placeholder='Phone Number'/>
                </div>
                <div className='col-md-12' >
                <input type="email" placeholder='Email'/>
                </div>
                <div className='col-md-12' >
                <input type="text" placeholder='Subject'/>
                </div>
            </div>
            </div>
            <div className='col-md-6'>
                <div className='row' >
                  <div className='col-md-12'>
                    <textarea placeholder='Please describe shortly you project' ></textarea>
                  </div>
                  <div className='col-md-12 text-center '>
                    <a href="#" className='btn-contact' > Contact Me </a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
