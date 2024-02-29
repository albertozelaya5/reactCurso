import { useState } from "react"




export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue)


    //se define funcion de flecha para que sume el valor
    //del counter, mediante setcounter(counter +1);
    const incremental = (value=1) => {setCounter(counter +value)};
    const decremental = (value=1) =>{
        if(counter === 0){
            return counter;
        }else{
            setCounter(counter - value);
        }
    };
    const reset = () =>{setCounter(initialValue);}

  return{
    counter,
    incremental,
    decremental,
    reset,
  }
}
