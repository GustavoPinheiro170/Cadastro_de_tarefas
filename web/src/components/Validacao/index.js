import React from 'react';

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido',
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  senha: {
      regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/,
      message: "Mínimo 4 caracteres, pelo menos 1 letra e 1 número"

  },
  nascimento: {
      regex: /(\d{4})[-.\/](\d{2})[-.\/](\d{2})/,
      message: 'Menores de 12 anos não podem se registrar'
  },
  cpf: {
      regex: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      message : 'Preencha um CPF válido'
  }
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);




  function validate(value) {

    const Dtnascimento = value.slice(0, 4);
    const DateNumber = Number(Dtnascimento);
    const date = new Date;
    let yearNow = date.getFullYear() - DateNumber;
    if(yearNow <= 12){
        console.log(yearNow);
        setError(types[type].message);
        return false;
    }

    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      console.log(value);
      return false;
    } else {
      setError(null);
      return true;
   
    }

    


  }


  function onChange({ target }) {
    if (error) 
    validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    
  };
};

export default useForm;