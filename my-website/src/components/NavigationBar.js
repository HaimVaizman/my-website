import React , { Alert } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar,Container } from 'react-bootstrap';
import styled from 'styled-components';
import ima from '../img/1.png'

const Styles = styled.div`
.navbar {

  background-color: #FFFFFF  ;
  z-index: 0;
  opacity: 1.2;
 
}
.nav{


}

.img{
 

    height: 58px;
    width: 50px;
    z-index: -1;
    text-align: right;
   
   
}


}
.text{
  background-color:  #d9d9d9  ;
  font-size: 15px;
  font-style: normal;
  text-align: right;
  font-weight: bold;
  color: '#FFFFFF';
  color: '#bbb';
  opacity: 0.9;

}



a, .navbar-brand, .navbar-nav .nav-link {
  color: '#bbb';
  

  &:hover {
    color:'#bbb';
  
   
  }
}
`







export const NavigationBar = () => (
 <Styles>
  
    <Navbar expand="lg">
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
            <Link to="/contact">יצירת קשר</Link>
           
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link>
          <Link  to="/Permitforuseexceeds">היתר לשימוש חורג</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link>
          <Link to="/Accessibility">נגישות</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
           
              <Link to="/About">עסקים</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              
              <Link to="/">ראשי</Link>
            </Nav.Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  
    

  
    <nav className="text" >
   
     <a>
     רישוי עסקים תל אביב-יפו   
       </a> 
       <span></span><span></span>   <span></span><span></span>      
     
  <a >

  <span   ><img  className="img" src={ima} alt="1"/></span>
 

    </a>
    
</nav>





          

          
       
    
   


   </Styles>




  

)

  
  


////<Navbar.Brand href="//">0506831839 לייעוץ חינם התקשרו</Navbar.Brand>