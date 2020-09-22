import React from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from '../../../UserContext';
import './style.css';

function Header(){

    const name = React.useContext(UserContext);

    function componentDidMount() {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('nomeLogin', 'emailLogin', 'senhaLogin');
             window.location.href = "http://localhost:3000/Login";
        }
   }

    return (

          <div className='header'>
              <nav>
                  <ul>
                       

                    { 
                     name  ? (
                         <>
                    <li>{name}</li>
                    <li className='SignUp' onClick={componentDidMount}><Link to='/' >Logout </Link></li></>
                    )
                    :(  
                    <>
                    <li>  <Link to='/Login'>Sign In</Link> </li> 
                    <li className='SignUp'> <Link to='/Cadastro' > Sign Up</Link>  </li> 
                    </>
                    )  }
                   
                   
                  </ul>
              </nav>
           </div>
              
 
   
   
      );
  }
  export default Header;