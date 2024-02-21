import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react'; //HOOK USESTATE

const CounterApp = ({value}) => {

  /* const handleAdd = (event, newValue) =>{
    console.log(event);
    value = 1000;
    console.log(value);
  } */

    const [ counter, setCounter ] = useState(value)

    const handleAdd = () => {
      //setCounter( counter +1 );
      //console.log(event);
      setCounter((c) =>c+1)// la c tiene el valor del counter
    }
    const handleDecreased = () => {
      setCounter((c) =>c-1)
    }
    const handleRestart = () => {
      setCounter(value)
    }

  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleDecreased }> -1 </button>
        <button onClick={ handleRestart }> Reset </button>
    </>
  )
}

//PROPIEDAD DE PROPS PARA ESPECIFICAR EL TIPO DE VALOR DEL PROP
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

//VALIDACION EN CASO ESTE VACIO EN EL MAIN
//O NO SE HAYA DEFINIDO EL PROP TIPO//

CounterApp.defaultProps = {
    value: 'Ni modo pa'
}

export default CounterApp