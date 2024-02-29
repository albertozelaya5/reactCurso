import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small';

export const MemorizeHook = () => {

  const { counter, incremental } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr />

        <button className='btn btn-primary' onClick={ ()=>incremental() }>
            +1
        </button>

        <button className='btn btn-outline-primary' onClick={ ()=> setShow(!show) }>
          Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
