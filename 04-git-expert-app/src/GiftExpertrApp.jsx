import { useState } from "react";
import { AddCategory, GiftGrid } from "./components/";


export const GiftExpertrApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (NewCategory) => {

    if (categories.includes(NewCategory)) return;
    
    setCategories([NewCategory, ...categories]);
  };

  return (
    <>

      <h1>GiftExpertApp</h1>

      <AddCategory NewCategory={onAddCategory} />
      

      {categories.map( (category) => 
        <GiftGrid 
        key={category} 
        category={ category } />
      )}

      {/* Gif item */}
    </>
  );
};
