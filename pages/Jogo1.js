import React from 'react';
import { Text,StyleSheet, Image, ScrollView,SafeAreaView, Button } from 'react-native';

export default function Jogo1({navigation}) {
  return (
    
   <SafeAreaView style={styles.container}>
     <ScrollView>
        <SafeAreaView>
        
        </SafeAreaView> 
        <Button title="Voltar" onPress={ () => navigation.navigate('Home')} />
        <SafeAreaView style={styles.cxfoto}>
          <Image 
          style = {styles.img}
          resizeMethod="center" 
          source={ require("../assets/jogo1.jpg")}/>
        </SafeAreaView>
        <Text style={styles.paragraph}>Fortnite Minty Legends Pack PS5</Text> 
      <Text style={styles.paragraph}>R$68,00</Text>
      <Text style= {styles.titulo}>Sinta o frescor da batalha com o Pacote Lendas Menta, que inclui tudo que você precisa para refrescar suas habilidades: Traje Caçadora de Tesouros — Menta Acessório para as Costas Apetrecho Mentolado Picareta Multiferra-menta Traje Bombadeira</Text>
      
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