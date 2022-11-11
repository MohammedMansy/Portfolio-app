import React from 'react';
import "./style.css";
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Services() {
  return (
    <section className='services py-5 ' >
        <h2 className='tittle-services text-center text-uppercase pb-5 '> My Services </h2>
      <div className='container' >
        <div className='row'>
            <div className=' col-md-3' >
                <div className='box-services text-center bg-white'>
                    <FontAwesomeIcon icon={faDesktop} className='icon' />
                    <h4>Web Design</h4>
                    <p>I approach each project individually and always foucs on the result</p>
                </div>
            </div>
            <div className=' col-md-3' >
                <div className='box-services text-center bg-white'>
                    <FontAwesomeIcon icon={faFileCode} className='icon' />
                    <h4>Web Development</h4>
                    <p>Your Website Will Be Build With an new Proven technology</p>
                </div>
            </div>
            <div className=' col-md-3' >
                <div className='box-services text-center bg-white'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                    <h4>Facebook Ads SMM</h4>
                    <p>I approach each project individually and always foucs on the result</p>
                </div>
            </div>
            <div className=' col-md-3' >
                <div className='box-services text-center bg-white'>
                    <FontAwesomeIcon icon={faDesktop} className='icon' />
                    <h4>Google Ads</h4>
                    <p>I approach each project individually and always foucs on the result</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}
