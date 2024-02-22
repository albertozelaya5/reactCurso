import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

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
