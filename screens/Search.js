import {useState} from 'react';
import {TextInput, View,StyleSheet,FlatList,Text} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {fetchSearchNews} from '../utils/fetchAPI';
import {Card} from '../components/ui/Card';
import {Formik} from 'formik';

export const Search = () => {
    const [news,setNews] = useState([]);
    const [search,setSearch] = useState('');
    
    
    const handleSubmit = (values) => {
        const search = fetchSearchNews(values);

        try{
            fetchSearchNews(search)
            .then(response => {
                setNews(response);
                setSearch('');
            })
        }
        catch(error){
            console.log(error);
        }
    }

        
    
   



    return (
        <>
        {/* Create a search form with Formik*/}
        <Formik
            initialValues={{search:''}}
            onSubmit={handleSubmit}
        >
            {({handleChange,handleSubmit,values}) => (
                <View style={styles.container}>
                    <View style={styles.searchContainer}>
                        <Ionicons name="ios-search" size={24} color="black" />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search"
                            onChangeText={handleChange('search')}
                            onSubmitEditing={handleSubmit}
                            value={values}
                        />
                    </View>
                </View>
            )}
        </Formik>   



      
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
            />
        ) : (
            <Text>Loading...</Text>
        )}
        </>
    );
};






        
       

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        margin:15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    searchInput: {
        width: '60%',
        height: 40,
        textAlign: 'left',
        margin:5,
        fontSize: 18,
    },
})