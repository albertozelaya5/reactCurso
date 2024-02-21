import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GiftExpertrApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = () => {
    setCategories(['bleach', ...categories]);
  };
  return (
    <>
      {/* Titulo */}
      <h1>GiftExpertApp</h1>

      {/* Imput */}
      <AddCategory>
        
      </AddCategory>

      {/* Listado de Gif */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {/* Que por cada categoria de categories, un li que se mande... */}
        {/* El id del categorie en singular, para recorrer 1by1 lo que hace map */}
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        <li>123</li>
        <li>ABC</li>
        <li>XYZ</li>
      </ol>
      {/* Gif item */}
    </>
  );
};
