import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Navigation from './Components/Navigation'
import { Switch , Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Resume from './Components/Resume'
import Sidebar from './Components/Sidebar'
import Beginning from './Components/Beginning'




let baseURL = 'http://localhost:3003'

class App extends React.Component{


    
  
  render(){
   
  
    return(
      <div>
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
           <div id="colorlib-main">
             <Beginning></Beginning>
					<About></About>
			
					<Resume></Resume>
          	</div>
      	</div>
      </div>
     
          
       
         <Switch>  
        
          
         <Route exact path='/' component={Home} 
           />


<Route exact path='/about' component={About} 
           />




<Route exact path='/contact' component={Contact} 
           />


             
             
            

             </Switch>
             

           
      
   
           
       
            
          
         </div>
        
      
    )
  }
}
export default App;
