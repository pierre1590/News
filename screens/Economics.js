
import {FlatList,RefreshControl,Text} from 'react-native';
import {Card} from '../components/ui/Card';
import { fetchEconomics } from '../utils/fetchAPI';

export const Economics = () => {
    const news = fetchEconomics();
    
    return (
        <>
        {/* Display the news results or the error message*/}
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
                            refreshing={false}
                    />
                }
            />
        ) : (
            <Text>Loading...</Text>
        )}
    </>
    );
}
   
  
    


