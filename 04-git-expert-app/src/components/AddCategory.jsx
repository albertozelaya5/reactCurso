import { useState } from "react";

export const AddCategory = () => {
  const [imputValue, setImputValue] = useState("One Punch");

  const onImputChange = (event) => {
    setImputValue(event.target.value);
  };

  return (
    /* El <></> se usa cuando hay mas de un elemento */
    <form>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={imputValue}
        onChange={onImputChange}
      />
    </form>
  );
};
