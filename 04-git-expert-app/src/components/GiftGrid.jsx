import { GiftItem } from "./GiftItem";
import { useFetchGifts } from "../hooks/useFetchGifts";

//nunca colocar una funcion en un functional component
//porque se vuelve a renderizar y ocupa mas espacio en memoria

export const GiftGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifts(category);

  return (
    <>
      <h3>{category}</h3>
      
      {
        //condiciion && () --CUANDO ES UN IF TRUE --AND LOGICO SE LLAMA
        //condiciin ? () : null --  OPERADOR TERNARIO
        //ES VERDADERO? (SISI) : SINO
        isLoading && (<h2>Cargando...</h2>)
      }
      

      <div className="card-grid">
        {images.map((image) => (
          <GiftItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
