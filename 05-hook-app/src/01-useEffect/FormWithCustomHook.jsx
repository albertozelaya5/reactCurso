import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onImputChange, username, email, password } = useForm({
  });

  //const { username, email, password } = formState;


  //event.target es para acceder a la info introducida
  //en un imput mediante el onchange
  //a la hora de hacer enter
  return (
    <>
      <h1>Fomrulario con custom Hook</h1>
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
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contrasena"
        name="password"
        value={password}
        onChange={onImputChange}
      />
    </>
  );
};
