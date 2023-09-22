import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, ImageBackground, Button, FlatList } from 'react-native'

import {NavigationContainer} from '@react-navigation/native'

import {createNativeStackNavigator} from '@react-navigation/native-stack' 

import LoadingScreen from './components/LoadingScreen.js';

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

const Stack = createNativeStackNavigator();

const App = () => {

  
  const [isLoading, setIsLoading] = useState(true);

  // Simulate an async operation (e.g., loading data, initializing app)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the delay as per your requirements
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen  name="Home" component={Home} />
    
    </Stack.Navigator>
    </NavigationContainer>
      )
    };

  const Home =()=> {
    return(
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
         <View>
          <Button title="Press Me" />
         </View>
      </ImageBackground>
  
    </View>
    )
  }

  const Login =(props)=> {
    return(
      <View style = {{flex: 1, justifyContent : 'center' , alignItems : 'center'}}>
        <Text style = {{fontSize: 20}}>
          This is Login Screen
        </Text>
        <Button title="Go to next page" onPress={()=>props.navigation.navigate("Home")}/>
      </View>
    )
  }

  

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
