
import React from 'react';
import { Text,StyleSheet, Image, ScrollView,SafeAreaView, Button } from 'react-native';

export default function Home({navigation}) {
  return (
   <SafeAreaView style={styles.container}>
     <ScrollView>
      <SafeAreaView>
      <Button title="entrar" onPress={ () => navigation.navigate('Home')} />

       <Text style= {styles.titulo}>Onde a diversão começa</Text>
      </SafeAreaView>
         <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/eletronic.jpg")}/>
      </SafeAreaView>
      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/ney.jpg")}/>
      </SafeAreaView>
      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/jogo2.jpg")}/>
      </SafeAreaView>
      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/grand.jpg")}/>
      </SafeAreaView>
      

     </ScrollView>
     </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent:"center",
    alignItens:"center",
    padding: 8,
    backgroundColor: 'blue',
  }, 
  img:{
    width:290,
    height:230,
    borderRadius: 8,
    margin: 5 
  },
  cxfoto:{
  backgroundColor: "#121212",
  marginTop: 20,
  alignItens:'center',
  borderRadius: 15,
  paddingLeft: 10

  },
  titulo:{
    fontSize:20,
    justifyContent:"center",
    alignItens:"center",
  }

});