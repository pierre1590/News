import {useState,useEffect} from "react";
import {StyleSheet,FlatList,Text} from 'react-native';
import {fetchSearchNews} from '../utils/fetchAPI';
import {Card} from '../components/ui/Card';
import { SearchBar } from '../components/ui/SearchBar';

export const Search = () => {
    const ClientApi = fetchSearchNews();

    const [news,setNews] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(() => {
        ClientApi
        .then(data => {
            setNews(data);
            setIsLoading(false);
        })
        .catch(error => {
            setError(true);
            setIsLoading(false);
        });
    },[]);




    return (
      <>
        <SearchBar />
        
        {ClientApi ? (
          <FlatList
            data={ClientApi}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                description={item.description}
                publishedAt={item.publishedAt}
                urlToImage={item.urlToImage}
                author={item.author}
                url={item.url}
              />
            )}
            keyExtractor={(item) => item.title}
          />
        ) : (
          <Text style={styles.errorText}>No corresponding news was found.</Text>
        )}
      </>
    );
};






        
       

const styles = StyleSheet.create({
    errorText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#f02'
    },
})