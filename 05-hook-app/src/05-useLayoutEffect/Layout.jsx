import { useCounter, useFetch } from "../hooks";
import { Quote} from '../03-examples/Quote';
import { LoadingMessage } from "../03-examples/LoadingMessage";



export const Layout = (  ) => {

  const { counter,incremental } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
  const { author, quote } = !!data && data[0];
  return (
    <>
        <h1>BreackingBad Quotes</h1>
        <hr />
        {
            isLoading
            ?<LoadingMessage/>
            :<Quote author={author} quote={quote}/>
        }
        <button className="btn btn-primary" disabled={ isLoading } onClick={() => incremental()}>
            Next quote
        </button>
    </>
  )
}
