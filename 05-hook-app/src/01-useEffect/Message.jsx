import { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setcoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      //const coords = {x,y};
      setcoords({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3 className="mt-2">Usuario ya existe</h3>
      {/* se va a pasar el obj x, y, pe se convierte a JSON */}
      {JSON.stringify( coords )}
    </>
  );
};
