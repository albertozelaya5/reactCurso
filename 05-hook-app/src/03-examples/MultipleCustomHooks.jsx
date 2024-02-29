import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";
import {LoadindQuote, Quote} from './';


export const MultipleCustomHooks = (  ) => {

  const { counter, decremental, incremental } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);
  const { author, quote } = !!data && data[0];
  
  return (
    <>
    <h1></h1>
    
      
      <h1>Informacion de Pokemon</h1>
      <h1></h1>
        
      
      <hr />

      {/* cuando se hace un componente con argumentos, se pueden poner esos argumentos */}
      {
        isLoading? <LoadingMessage/> : <PokemonCard id={ counter } name={ data.name } sprites={[data.sprites.front_default, data.sprites.front_shiny, data.sprites.back_default, data.sprites.back_shiny]}/>
      }

      { data?.name && <p> { data.name }</p> } {/* Display only the name property */}
      {/* null en onclick es que no se haga nada en el boton */}

      <button className=" btn btn-primary mt-2" onClick={ () => counter>1? decremental(): null }>
        Anterior 
      </button>
      {/* cuando es onclick entre corchetes, no significa que cuando se de click
      se ponga cierto valor, sino que cuando se de click se le dara la informacion
      que se dio para lamar a la function y asi sumar o*/}
      <button className="btn btn-primary mt-2"  onClick={ () => incremental() }>
        Siguiente
      </button>
    </>
  )
}
