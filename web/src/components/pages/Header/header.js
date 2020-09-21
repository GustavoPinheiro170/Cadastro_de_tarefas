import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function Header(){

    const usuario = localStorage.getItem('nomeLogin');
    
    function clearStorage() {
    localStorage.removeItem('emailLogin');
    localStorage.removeItem('senhaLogin');
    localStorage.removeItem('nomeLogin');
    }
    return (

          <div className='header'>
              <nav>
                  <ul>
                    {usuario ? <li>Cadastro de tarefas</li>: <li>  <Link to='/Login'>Sign In</Link> </li> }
                    {usuario ? <li>{usuario}</li>:<li className='SignUp'> <Link to='/Cadastro' > Sign Up</Link>  </li> } 
                    {usuario ? <a onClick={clearStorage} className='SignUp'><Link to='/' >Logout </Link></a> : <li></li>}
                  </ul>
              </nav>
           </div>
              
 
   
   
      );
  }
  export default Header;