import {FlatList,View,Text,StyleSheet} from 'react-native';
import {Card} from '../../components/ui/Card';




export const List = ({news}) => {
   

    return (
      <>
      
        {news.length < 0 ? (
            <Text style={styles.errorText}>
                    No corresponding news was found.
            </Text>
        ) : (
            <View style={styles.container}>
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
                ListEmptyComponent={
                    <Text style={styles.messageText}>Enter the news or word to search for.</Text>
                }
            />
        </View>
        )}
      </>
    );
}

const styles = StyleSheet.create({
    errorText:{
        color:'red',
        fontSize:18,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        fontWeight:'bold',
    },
    messageText:{
        fontSize:30,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'center',
        margin:30,
        marginBottom:20,
    }
})