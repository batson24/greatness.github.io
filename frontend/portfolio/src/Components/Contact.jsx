import React, { Component } from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'
// import Card from 'react-bootstrap/Card'

// import Room from '../Routes/Room'


export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
      handleNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      handleEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      handleMessageChange(event) {
        this.setState({message: event.target.value})
      }
    
      handleSubmit(event){
        event.preventDefault();
    
        axios({
          method: "POST", 
          url:"http://localhost:3003/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
            console.log(response.data.status)
          }
        })
      }

      resetForm(){
    
        this.setState({name: '', email: '', message: ''})
     }
     
    
    
    render() {
        
        return (
            

                
                <div className="social-box">
                
                     <div className="row1">
                         
                            <div className="col-lg-12 col-xs-12 text-center" id='column1'>
                                <div className='view'>
                                    <i className="fa fa-behance fa-3x" aria-hidden="true"></i>
                                    <div className="box-title">
                                        <h3>Contact</h3>
                                    </div>
                                   
                                    <div className="box-text">
                                    
  	<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
  	<div className="form-group">
      	<label htmlFor="name">Name</label>
      	<input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="exampleInputEmail1">Email address</label>
      	<input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
  	</div>
  	<div className="form-group">
      	<label htmlFor="message">Message</label>
      	<textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.handleMessageChange.bind(this)} />
  	</div>
  	<button type="submit" className="btn btn-primary">Submit</button>
  	</form>
    <br/><br/>
    <nav id="colorlib-main-menu">
              <ul>
                
               
                <li><a href="https://www.linkedin.com/in/dombatson/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" >LinkedIn</i></a></li> <br/><br/>
                <li><a href="https://github.com/batson24" target="_blank" rel="noopener noreferrer"><i data-nav-section="GitHub">GitHub</i></a></li>
               
              </ul>
            </nav>
                                    </div>
                                    <div className="box-btn">
                                       
                                    </div>       
                                   
                                 </div>
                            </div>
                    
                    </div>		
               
            </div>
   
            
        )
    }
}
