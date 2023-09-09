import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, FlatList } from 'react-native'

import logo from './images/logo.png';
import backgroundImage from './images/backgroundImage.jpg';



const images = [
  {
    id: '1',
    source: require('./images/img1.jpg') 
  },
  {
    id: '2', 
    source: require('./images/img2.jpg')
  },
  {
   id: '3',
   source: require('./images/img3.jpg')
  }
];


const App = () => {
  return (
    <View style={styles.container}>
  
     
  
      <ImageBackground 
        source={backgroundImage}
        style={styles.background}
      >
   <Image source={logo} style={styles.logo} />
        <FlatList
          data={images}
          
          renderItem={({item}) => (
            <Image source={item.source}
            style={styles.image} />
            
          )}
        
          numColumns={3} 
        
        />
         
      </ImageBackground>
  
    </View>
  )};
  
  const styles = StyleSheet.create({
  
    container: {
      flex: 1
    },
  
    logo: {
      alignSelf: 'center',
      marginTop: 20
    },
    
    background: {
      flex: 1

    },
  
    image: {
      width: 100,
      height: 200,
      margin: 18,
      marginTop :20
    }
  
  });

export default App;