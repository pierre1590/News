import {useState,useEffect} from "react";
import {FlatList,RefreshControl,Text} from 'react-native';
import {fetchTopNews} from '../utils/fetchAPI';
import {Card} from '../components/ui/Card';




export const TopNews = () => {
    const [news,setNews] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(false);
   
   
   useEffect(() => {
         fetchTopNews()
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
         {news ? (
            <FlatList
                data={news}
                renderItem={({item}) => <Card
                    title={item.title}
                    description={item.description}
                    publishedAt={item.publishedAt}
                    urlToImage={item.urlToImage}
                    author={item.author}
                    url={item.url}
                />}
                keyExtractor={item => item.title}
                refreshControl={
                    <RefreshControl
                            refreshing={true}
                            onRefresh={news}
                        />
                }
            />
        ) : (
            <Text>Loading...</Text>
        )}
      </>
    );
}
