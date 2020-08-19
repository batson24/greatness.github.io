import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Resume</span>
                <h2 className="colorlib-heading animate-box">Highlights</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Cloud FastPath <span>2020</span></h2>
                        <p>Work with marketing team, writers, and designers to execute campaigns
Responsible for writing HTML/CSS & Javascript responsive code for development of brand and
loyalty emails
Create and maintain automated email journeys to nurture and engage customers
Analyze campaign performance and present data about proposed optimizations
Testing campaigns for cross-browser compatibility and high-quality rendering
Assist freelancers with creating engaging and effective marketing landing pages based on creative
direction from creative team Miscellaneous marketing website development and creative needs</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>General Assembly Immersive Cohort<span>2020</span></h2>
                        <p>Creating full-stack web applications that leverage modern programming languages, frameworks, and tools while meeting the global demand for problem-solvers with strong technical foundations and the agility to keep learning.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Project Manager <span>2016-2020</span></h2>
                        <p>Manage the complete deal cycle, including sourcing, financial modeling, due diligence, negotiations and control operations for residential and commercial investments. Provide strategic and tactical fund allocation recommendations, including capital and expense budgets for business modeling and forecasting strategies. Assess project risk, identify root-cause for project failures, </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-6">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Education </h2>
                        <p>General Assembly Software Engineering Immersive <br/>	                               				     
Master of Science, Engineering Management University of Tennessee-Chattanooga <br/>
Bachelor University of Tennessee-Chattanooga 
 </p> 
                      </div>
                    </div>
                  </article>
                  <article >
                    <div >
                      <div >
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}