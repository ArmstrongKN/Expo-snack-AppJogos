
import React from 'react';
import { Text,StyleSheet, Image, ScrollView,SafeAreaView, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    
   <SafeAreaView style={styles.container}>
      <ScrollView>
        <SafeAreaView>
        <Text style= {styles.titulo}>Jogos para comprar</Text>
        </SafeAreaView>
      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/jogo1.jpg")}/>
      </SafeAreaView>
      <Text style={styles.paragraph}>Fortnite Minty Legends Pack PS5</Text> 
      <Text style={styles.paragraph}>R$68,00</Text>
      <Button title="Comprar" onPress={ () => navigation.navigate('Jogo1')} />



      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/jogo2.jpg")}/>
      </SafeAreaView>
      <Text style={styles.paragraph}>Minecraft</Text> 
      <Text style={styles.paragraph}>R$140,00</Text>
      <Button title="Comprar" onPress={ () => navigation.navigate('Jogo2')} />



      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/jogo3.jpg")}/>
      </SafeAreaView>
      <Text style={styles.paragraph}>GT Racing 2</Text> 
      <Text style={styles.paragraph}>R$50,00</Text>
      <Button title="Comprar" onPress={ () => navigation.navigate('Jogo3')} />

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
    backgroundColor: '#add8e6',
  }, 
 img:{
    width:290,
    height:230,
    borderRadius: 8,
    margin: 5 
  },
  paragraph:{
    fontSize:20
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
    alignItens:"center"
  }

});