import React from 'react'
import {Link} from 'react-router-dom'
import {Nav, Navbar, Form} from 'react-bootstrap'
// import NavbarOffcanvas from 'react-bootstrap-navbar-offcanvas'
import { /* everything else */ } from 'react-bootstrap'
export default function Navigation(props) {
    return (
      
       
        <div  bg='light' variant='light'>
            <Navbar bg="light" variant="light" >
            <Nav className="navbar" >  
            <Link className='nav-link'  to='/home'>Home</Link>
            <Link className='nav-link' to='/about'>About</Link>
            <Link className='nav-link' to='/contact'>Contact</Link>
            <Link className='nav-link' to='/resume'>Resume</Link>
          
            
            </Nav>
           
            </Navbar>
            
        </div>






    )
}




            
     
        
            
   