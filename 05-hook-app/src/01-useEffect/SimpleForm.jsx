import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "stridder",
    email: "kratos@gmail.com",
  });

  const { username, email } = formState;

  const onImputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value, //[name] entre corchetes porque es
      //elemento de html, o en este caso de JS a React
    });
  };

  useEffect(() => {
    //console.log("formState llamado");
  }, []);// solo [que solo se llame una vez]
  useEffect(() => {
    //console.log("formState llamado");

    /* return () => {
      second;
    }; */
  }, [formState]);
  useEffect(() => {
    //console.log("Email llamado");

    /* return () => {
      second;
    }; */
  }, [email]);

  //event.target es para acceder a la info introducida
  //en un imput mediante el onchange
  //a la hora de hacer enter
  return (
    <>
      <h1>Fomrulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onImputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="Username"
        name="email"
        value={email}
        onChange={onImputChange}
      />

      {//dentro de el return HTML se pone {}
      //para saber que se llama un 
        username==='stridder'? (<Message/>) : false
      }
    </>
  );
};
