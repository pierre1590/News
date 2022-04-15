import React, {useState} from "react";
import { StyleSheet, TextInput, View,Keyboard} from "react-native";
import {Ionicons} from '@expo/vector-icons';


export const  SearchBar = ({setSearchText}) => {
    const [value,setValue] = useState('');

  
  return (
    <>
      <View style={styles.searchContainer}> 
        <Ionicons name="ios-search" size={24} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search news..."
          onChangeText={setValue}
          onSubmitEditing={() => setSearchText(value)}
          value={value}
        />
        {/*If input length is > 0 ios-close icon appears otherwise nothing */}
        {value.length > 0 && (  
          <Ionicons name="ios-close" size={24} color="black"
          onPress={() => {
            setValue('');
            Keyboard.dismiss();
          }}
          />  
        )}
          

        
      </View>
    
</>
)
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchInput: {
    width: "60%",
    height: 40,
    textAlign: "left",
    margin: 5,
    fontSize: 18,
    color: '#000',
  },
});