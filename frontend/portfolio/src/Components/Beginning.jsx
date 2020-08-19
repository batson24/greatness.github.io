import React, { Component } from 'react'


export default class Beginning extends Component {
  render() {
    return (
      <div>
        
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/image.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>Welcome <br /></h1>
                          <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1uTcAvgYUd8fSkug5dzooAaDfxn4urQZWPSCglAYsXrc/edit" target="_blank" rel="noopener noreferrer">Resume<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/image2.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>Check Out<br /> My Projects</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/batson24/" target="_blank" rel="noopener noreferrer">Applications <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            
            </ul>
          </div>
        </section>
      </div>
    )
  }
}