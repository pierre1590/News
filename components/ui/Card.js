import {StyleSheet,View,Image,Pressable,Text,Linking,Platform} from 'react-native';
import {DateTime} from "luxon";
import 'intl';
import 'intl/locale-data/jsonp/en';


export const Card = ({title,description,publishedAt,urlToImage,author,url}) => {
    return (
      <>
        <View style={styles.container}>
          {/*Card to show news and onclik them return the website */}
          <Pressable
            android_ripple={{ color: "#ccb" }}
            style={({ pressed }) => [
              styles.button,
              pressed ? styles.buttonPressed : null,
            ]}
            onPress={() => {
              Linking.openURL(url);
            }}
          >
            <View>
            {/*If image is present show image otherwise show ImageNotAvailable.png from assets/images */}
              {urlToImage ? (
                <Image
                  style={styles.image}
                  source={{ uri: urlToImage }}
                />
              ) : (
                <Text style={styles.imageNotAvailable }>Image not available</Text>
              )}
             
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.header}>{title}</Text>
              <View style={styles.authorContainer}>
                <Text>Written by </Text>
                <Text style={styles.author}>
                  {/*If author is not specified "undefined" otherwise if it is too long returns to  P.Sabino....*/}
                  {author
                    ? author.length > 20
                      ? author.substring(0, 20) + "..."
                      : author
                    : "Undefined"}
                </Text>
              </View>
              <View style={styles.descriptionsContainer}>
              {/*If the description is present show the description otherwise show " No description " */}
                <Text style={styles.description}>
                  {description
                    ? description.length > 100
                      ? description.substring(0, 100) + "..."
                      : description
                    : "No description"}
                </Text>
                {/* <Text style={styles.description}>{description}...</Text> */}
              </View>
              <Text style={styles.publishDate}>
                Published on{" "}
                {DateTime.fromISO(publishedAt).toFormat("ccc, yyyy/MM/dd HH:mm")}
              </Text>
            </View>
          </Pressable>
        </View>
      </>
    );
}


      

const styles = StyleSheet.create({

  container: {
        margin:16,
        flex: 1,
        elevation: 4,
        borderRadius: 8,
        backgroundColor:'#fff',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageNotAvailable: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    marginLeft:90,
  },
  header: {
    textAlign: "justify",
    fontSize: 20,
    fontWeight: "600",
    margin: 8,
    color: 'red',
  },
  textContainer: {
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionsContainer: {
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    marginTop:8,
    fontSize: 18,
    color: 'blue',
    textAlign: "justify",
  },
  publishDate:{
    marginTop:8,
    fontSize:15,
    textAlign:'right',
  },
  url:{
    marginTop:8,
    fontSize:12,
    textAlign:'right',
  },
  authorContainer: {
    flexDirection: "row",
    fontSize:18,
    textAlign:'center',
},
  author: {
      fontWeight:'bold',
  },
  button: {
    flex:1,
  },
  buttonPressed: {
    opacity: 0.5,
    color: '#f10',
  },
});

