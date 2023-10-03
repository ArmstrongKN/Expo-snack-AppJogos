import { Text,StyleSheet, Image, ScrollView,SafeAreaView, Button } from 'react-native';

export default function Home({navigation}) {
  return (
    
   <SafeAreaView style={styles.container}>
     <ScrollView>
      <SafeAreaView>
      
      </SafeAreaView>
      <Button title="Voltar" onPress={ () => navigation.navigate('Home')} />
      <SafeAreaView style={styles.cxfoto}>
      <Image style = {styles.img}resizeMethod="center" source={ require("../assets/jogo2.jpg")}/>
      </SafeAreaView>
      <Text style={styles.paragraph}>Minecraft</Text> 
      <Text style={styles.paragraph}>R$140,00</Text>
      <Text style= {styles.titulo}>Minecraft é um jogo feito de blocos que você pode transformar em tudo que puder imaginar. Jogue no modo Criativo com recursos ilimitados, ou cace ferramentas para se defender do perigo no modo Sobrevivência.</Text>

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
     width:308,
    height:230,
    borderRadius: 8,
    margin: 5 
  },
  paragraph:{
    fontSize:20
  },
  cxfoto:{
  backgroundColor: "#ffcbdb",
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