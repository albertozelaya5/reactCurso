import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

  const [formState, setformState] = useState(initialForm);

  const onImputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [ name ]: value, //[name] entre corchetes porque es
      //elemento de html, o en este caso de JS a React
    });
  };

  const onResetForm = () =>{
    setformState(initialForm );
  }

  return {
    ...formState,
    formState,
    onImputChange,
    onResetForm,
  }
}