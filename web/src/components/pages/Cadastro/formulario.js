import React from 'react';
import useForm from '../../Validacao/index';
import Input from '../Form/input';
import './style.css'


function Formulario() {
     const email = useForm('email');
     const cep = useForm('cep');
     const senha = useForm('senha');
     const nascimento = useForm('nascimento');
     const cpf = useForm('cpf');
    
    const [nome, setNome] = React.useState('');  
    const [endereco, setEndereco] = React.useState('');
    const [numero, setNumero] = React.useState('');
    
    


    function saveChange(){
        localStorage.nome = nome;
        localStorage.email = email.value;
        localStorage.senha = senha.value;
        localStorage.nascimento = nascimento.value;
        localStorage.endereco = endereco;
        localStorage.numero = numero;
        localStorage.cep = cep.value;
        localStorage.cpf = cpf.value;
        localStorage.nomeLogin = nome;

    }



    function handleSubmit(event){
      event.preventDefault();
      if(nascimento.validate() && senha.validate() && email.validate && nome != '' ){
        return true
      }else {
        alert('Favor Preencha todos os campos obrigatórios')
      }
    
    }
    return (
        <div className='Cadastro'>
         
        <form onSubmit={handleSubmit}>
        <h1>Crie sua conta</h1>

        <Input
        label ='Nome *'
        id= 'nome' 
        type='text' 
        value={nome}
        onChange={(event) => 
        setNome(event.target.value)} 
      />


      <Input
      label ='Email *' 
      id='email'
      type='email' 
      {...email}
      />


      <Input
      label = 'Data de Nascimento *' 
      id='dtnascimento'
      type='date' 
      {...nascimento}
      />


      <Input
      label = 'CPF' 
      id='cpf'
      type='text'
      placeholder='000.000.000-00' 
       {...cpf}
      />

      <Input
      label = 'Endereço'
      id ='endereco'
      type='text' 
      value={endereco}
      onChange={(event) => 
      setEndereco(event.target.value)} 
      />

     
      <Input
      label = 'CEP' 
      id='cep'
      type='text' 
      placeholder='00000-00'
      {...cep}
      />


      <Input 
      label='Numero'
      id='numero'
      type='number' 
      value={numero}
      onChange={(event) => 
      setNumero(event.target.value)} 
      />

      <Input 
      label = 'Senha *'
      id='senha'
      type='password' 
      {...senha}
      />

      <button type='submit' onClick={saveChange}> Cadastrar </button>

      </form>

        </div>

    );
}

export default Formulario;