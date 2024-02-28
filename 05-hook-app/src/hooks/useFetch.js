import {useEffect, useState} from 'react';
import { Message } from '../01-useEffect/Message';


export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();


  }, [url]);

  //setLoadingState = 
  
  const getFetch = async( url ) =>{
    const resp = await fetch('');
    
    
    await nwa Promise( resolve => setTimeout(resolve, 1500) );
    if( !resp.ok ){
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          Message: resp.statusText,
        }
        
      });
      return;
    }
    const data = await resp.json();
    console.log({data});
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    })
  }
  

  
  // Manejo del cache


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }

}