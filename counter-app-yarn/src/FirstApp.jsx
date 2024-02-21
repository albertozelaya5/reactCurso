

/* Es parte del function */
/* const newMessage = {
    message: 'Hola mundo',
    title: 'siu'
}; */

import PropTypes from 'prop-types';/* P siempre mayuscula */

const getResult = (a,b) => { /* cuando es async se convierte en un objeto */
    return a+b; /* siempre retornar */
}
 
//export const FirstApp = ({title, subtitle}) => {
    
  /* return (
    <>
    {/* <h1>{ title }</h1>
    <p>{ subtitle }</p>
    <h1>hola mundo</h1> */
        {/* <code>{getResult(1,10)}</code> */} {/* cuando es funcion solo ponerla */}
        {/* <code>{JSON.stringify(newMessage)}</code> */}
        {/* cuando es ojbjeto convertir a JSON */}
        {/* Etiqueta code para que se mire mas ordenado <code></code> */}
        {/* <p>hola soy un parrafo</p>
    </>
  ) */

  //title,
  //subTitle = ''
  
};

export const FirstApp = ({title,subTitle, name}) =>{

    return(
        <>
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired, //para que sea completado,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
 title: ' No hay titulo',
 subTitle: 'no hay subtitulo',
 name: 'Gokun siuuu'
}