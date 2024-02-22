import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertrApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (NewCategory) => {

    if( categories.includes(NewCategory) ) return;
    //console.log(NewCategory);
    setCategories([NewCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GiftExpertApp</h1>

      {/* Imput */}
      <AddCategory 
      //setCategories = { setCategories }
        NewCategory = {onAddCategory}
      />{/* Que este prop se exporte */}

      {/* Listado de Gif */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      <ol>
        {/* Que por cada categoria de categories, un li que se mande... */}
        {/* El id del categorie en singular, para recorrer 1by1 lo que hace map */}
        {
          categories.map((category) => {
            return <li key={category}>{category}</li>;
          })
        }
        <li>123</li>
        <li>ABC</li>
        <li>XYZ</li>
      </ol>
      {/* Gif item */}
    </>
  );
};
