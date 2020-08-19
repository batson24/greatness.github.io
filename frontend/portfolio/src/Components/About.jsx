import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">LETS GET TO KNOW ME</h2>
                    <p>I am a Full stack Web Developer with a passion for startups and entrepreneurship. Lean Six Sigma Certified with a Masters in Engineering from the University of Tennessee. Well versed</p>
                    
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Expertise</span>
                <h2 className="colorlib-heading">Full Stack Skills</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span >
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>
                        <ul className='expertise'>
                            <li className='expertise'>JavaScript
                                </li>
                                <li className='expertise'>HTML
                                </li>
                                <li className='expertise'>CSS
                                </li>
                                </ul>
                            </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span>
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Front End Development</h3>
                    <p>
                        
                    <ul className='expertise'>
                            <li className='expertise'>React
                                </li>
                                <li className='expertise'>Python
                                </li>
                                <li className='expertise'>JQuery
                                </li>
                                </ul>

                    </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span>
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Back End Development</h3>
                    <p>
                    <ul className='expertise'>
                            <li className='expertise'>Express
                                </li>
                                <li className='expertise'>Mongodb
                                </li>
                                <li className='expertise'>SQL
                                </li>
                                </ul>
                        
                        </p>
                </div>
                </div>
            </div>
            
            </div>
        </div>
        </section>
      </div>
    )
  }
}