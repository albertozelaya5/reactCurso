import { useState } from "react"




export const useCounter = ( initialValue = 10 ) => {

    const [counter, setcounter] = useState(initialValue)

    //se define funcion de flecha para que sume el valor
    //del counter, mediante setcounter(counter +1);
    const incremental = (value =1) => {setcounter(counter +value)};
    const decremental = (value=1) =>{
        if(counter===0){
            return counter;
        }else{
            setcounter(counter -value);
        }
    };
    const reset = () =>{setcounter(initialValue);}

  return{
    counter,
    incremental,
    decremental,
    reset,
  }
}
