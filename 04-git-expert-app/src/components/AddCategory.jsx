import { useState } from "react"


export const AddCategory = ({ NewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) =>{
    setInputValue(target.value);
  }

  const onSubmit = ( eventito ) =>{
    eventito.preventDefault(); //para que no se reinicie
    if(inputValue.trim().length <= 1) return;

    //setCategories((categories) => [inputValue, ...categories]);
    NewCategory( inputValue.trim() );
    setInputValue('');
  }

  return(
    /* El evento onSubmit es a la hroa de hacer enter */
    <form onSubmit={onSubmit}> {/* El form siempre se reinicia */}
      <input 
        type="text"
        placeholder = "Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
        //onClick={inicioInput}
       />
    </form>
      
  )
};
