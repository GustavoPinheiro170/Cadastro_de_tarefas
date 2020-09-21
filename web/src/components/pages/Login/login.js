import React from 'react';
import { Route, BrowserRouter as Routes , Link } from 'react-router-dom';
import Painel from '../Painel/painel';
import Input from '../Form/input';
import './style.css'

function Login(){

    const [Email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [nome, setNome] = React.useState('');

  
    
        localStorage.senhaLogin = senha;
        localStorage.emailLogin = Email;
        



    

    return(
        <div>
            <Routes>
                <Route path ='/Painel' element={<Painel />} />
            </Routes>
            <div className='BannerLogin'>
                <h1>Cadastro de Tarefas</h1>
                <p>Projeto Desenvolvido para teste de conhecimento</p>
            </div>
        <div className='Login'>
        <form>
        <span id='Message'></span><br />
        <Input
        label ='Email'
        id= 'Email' 
        type='email' 
        value={Email}
        onChange={(event) => 
        setEmail(event.target.value)} 
        />

      <Input 
      label = 'Senha'
      id='senha'
      type='password' 
      value={senha}
      onChange={(event) => 
      setSenha(event.target.value)} 
      />

    
        <Link to='/Painel'><button id='buttonSubmit'  type='submit' > Entrar </button></Link>
            
        </form>

        </div>
        </div>
    );
}
export default Login;