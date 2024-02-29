import { useFetch } from "../hooks"


export const MultipleCustomHooks = (  ) => {

  const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/2');

  return (
    <>
      <h1>Informacion de Pokemon</h1>
      <hr />

      { isLoading && <p>Cargando...</p> } {/* si es isLoading && quiere decir si esta en true */}

      <pre>{ JSON.stringify(data, null, 2) }</pre>

      <h2>{data?.name}</h2>
    </>
  )
}
