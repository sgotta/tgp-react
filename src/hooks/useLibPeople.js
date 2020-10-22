import  {useState,useEffect} from 'react';


const useLibPeople = paramFilter => {
  const [error, setError] = useState(null); 
  const [isLoaded,setIsLoaded] = useState(false);
  const [count,setCount] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const url ="https://swapi.dev/api/people/"; 
    const urlsearch = paramFilter===""?url:url+"?search="+paramFilter;
    console.log("prueba"+urlsearch);

      fetch(urlsearch)
      .then(res =>res.json())
      .then((result) => {
          setIsLoaded(true);
          setCount(result.count);
          setItems(result.results);
      },
      (error)=>{
          setIsLoaded(false);
          setError(error);
      }
      );

    
  }, [paramFilter])
  return {error,isLoaded,count,items}
};
export default useLibPeople;
