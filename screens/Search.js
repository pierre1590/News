import react, {useState, useEffect} from 'react';
import { fetchSearchNews } from '../utils/fetchAPI';
import { SearchBar } from '../components/ui/SearchBar';
import { List } from '../components/ui/List';

export const Search = () => {
     const [news,setNews] = useState([]);
     const [isLoading,setIsLoading] = useState(false);
     const [error,setError] = useState(false);
      const [searchText,setSearchText] = useState('');


      //Retrieve the searched news from the API
    useEffect(() => {
        fetchSearchNews(searchText)
        .then(data => {
            setNews(data);  
            setIsLoading(false);
        })
        .catch(error => {
            setError(true);
            setIsLoading(false);
        });
    },[searchText]);
  
   
  console.log(searchText); 

     return (
      <>
        <SearchBar  setSearchText={setSearchText}/>
        <List news={news} />
      </>
    );
};






        
       

