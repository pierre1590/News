
import {FlatList,RefreshControl,Text} from 'react-native';
import {fetchTopNews} from '../utils/fetchAPI';
import {Card} from '../components/ui/Card';




export const TopNews = () => {
   const news = fetchTopNews();



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
    )
}
