import React from 'react';
import "./style.css";
import project1 from "./project1.jpg";
import project2 from "./project2.jpg";
import project6 from "./project6.jpg";
import project5 from "./project5.jpg";

function Sectionportfolio() {
  return (
    <section className='portfolio py-5 '>
      <h2 className='main-title text-center text-uppercase py-5 ' >portfolio</h2>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 text-center '>
                <img src={project1}  alt=""/>
                <img src={project2} alt=""/>
                <img src={project6} alt=""/>
                <img src={project5} alt=""/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Sectionportfolio
