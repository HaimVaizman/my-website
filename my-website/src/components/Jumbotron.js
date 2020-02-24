import React from 'react';
import { Jumbotron as Jumbo,Container ,ButtonToolbar,Button } from 'react-bootstrap';
import styled from 'styled-components';
import boatImage from '../assets/aaa.jpg';
import './jumbotron.css';
import i from '../img/blue.png'
import ia from '../img/12.png'
import iag from '../img/red.png'
import Table from 'react-bootstrap/Table'
import back from '../img/back2.png'
import {Navigation} from 'react-router';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';








const Styles = styled.div`{


.body{
  display: flex;
  display: -ms-flexbox;
  display: -webkit-box;
  background-color:#1e7ed0;



}
  .jumbo {
   
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 700px;
    position: relative;
    z-index: -1;
    display: flex1;
    display: -ms-flexbox;
    display: -webkit-box;


  }

.img{

  height: 170px;
  width: 400px;
  z-index: -1;
  background-size: cover;
  

}

.table{
  padding-bottom: 500px;
  position: absolute;

}
.text{
  font-size: 50px;
  font-style: normal;
  right:100px;
  text-align: center;
  font-weight: bold;
  color:'white';

}

  .overlay {
   
    background-color: #000000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .but{

    padding: 60px;
    padding-right: 150px;
    size: 60px;
    z-index: -2;

    margin-top: 300px;
    margin-bottom: 100px;
    margin-right: 280px;
   margin-left: 850px;

   
   font-size: 30px;
  }
}`




export const Jumbotron = () => (

  <Styles>
    <Jumbo fluid className="jumbo">
  
    <div className="overlay"></div>
   


   
    <ButtonToolbar>
  
  
    
    <Button type="submit" className="Button"  variant="primary" size="lg">
    <img className="Buttonback" src={back} alt="1"/>עסקים
    </Button>
 


    <Button type="submit" className="Button" variant="success" size="lg">
    <img className="Buttonback" src={back} alt="1"/> נגישות
    </Button>


    <Button type="submit" className="Button"variant="danger" size="lg">
    <img className="Buttonback" src={back} alt="1"/> היתר שימוש חורג לעסקים
    </Button>
</ButtonToolbar>

 








   
   
    </Jumbo>

    
  </Styles>

 
)






///<table>

 
///<th><img  className="img" src={iag}  alt="1"  />   </th>

//<th></th> <th></th> <th></th> <th></th> <th></th> <th></th>
///<th></th> <th></th> <th></th> <th></th> <th></th> <th></th> <th></th>
//<th></th> <th></th> <th></th> <th></th> <th></th>


//<th> <img className="img" src={ia} alt="1"/></th>
//<th></th> <th></th> <th></th> <th></th> <th></th>
///<th></th> <th></th> <th></th> <th></th> <th></th>
//<th></th> <th></th> <th></th> <th></th>

//<th><img className="img" src={i} alt="1" title='fgdsfsd'/></th>


///<button type="button" class="bottom-right" >עסקים</button>
///<br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
///<a href="https://www.w3schools.com">Visit W3Schools</a>




///</table>
