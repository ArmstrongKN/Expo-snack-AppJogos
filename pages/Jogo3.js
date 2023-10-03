import { Text,StyleSheet, Image, ScrollView,SafeAreaView, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    
   <SafeAreaView style={styles.container}>
     <ScrollView>
      <SafeAreaView>
       
      </SafeAreaView>
      <Button title="Voltar" onPress={ () => navigation.navigate('Home')} />
      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/jogo3.jpg")}/>
      </SafeAreaView>
      <Text style={styles.paragraph}>GT Racing 2</Text> 
      <Text style={styles.paragraph}>R$50,00</Text>
      <Text style= {styles.titulo}>GT Racing 2 é mais um simulador de corridas da Gameloft. Com mais de 60 veículos - todos personalizáveis - você vai ter que queimar muita borracha para desbloqueá-los</Text>
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
      width:300,
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