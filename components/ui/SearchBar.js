import React from 'react';
import {Formik} from 'formik';
import {View,TextInput,StyleSheet} from 'react-native';
import {fetchSearchNews} from '../../utils/fetchAPI';


export const SearchBar = () => {
const ClientApi = fetchSearchNews();

const onSubmit = (values) => {
  ClientApi.response.data.articles(values.search)
}


  return (
    <>
      <Formik
        initialValues={{search:''}}
        onSubmit={onSubmit}  
      >
        {({handleChange,values}) => (
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              onChangeText={handleChange('search')}
              value={values.search}
              placeholder='Search news...'
            />
           
          </View>
        )}
      </Formik>
    </>
  )
}

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
}
})