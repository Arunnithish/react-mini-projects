import { useState} from "react";
import UseReactFetchHook from "./UseReactFetchHook";
function App() {
  const [ query , setQuery] = useState('');
  const [ pageNumber , setPageNumber] = useState(1);



  const {
    loading ,error,books,hasMore
  } = UseReactFetchHook(query,pageNumber);

  function handleSearch(e){
    setQuery(e.target.value);
    setPageNumber(1);
  }
  return (
    <>
    <input type='text' value={query} onChange={handleSearch}></input>
    {
      books.map(book=>{
        return <div key={book}>
          {book} 
        </div>
      })
    }
    <div>{loading && 'Loading.....'}</div>
    <div>{error && 'Error'}</div>
    </>
  );
}

export default App;
