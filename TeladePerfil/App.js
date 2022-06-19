import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';


const colorGithub = '#010409';
const imageGithub = 'https://avatars.githubusercontent.com/u/78940661?s=400&u=dbf6b4edb4f6ac84fb95ce7488afac811fa104d2&v=4';


export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <View >
        <StatusBar style="auto" backgroundColor={colorGithub} barStyle="light-content"/>

        <Text style={styles.text}>TELA DE PROFILE</Text>
        <Image accessibilitylabel='Gleiciane foto de perfil com fundo branco' 
        style={styles.avatar} source={{uri:imageGithub}}/>

       
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorGithub,
      flex: 1,
    },


    text: {
          fontSize: 50,
          fontWeight: 'bold',
          color: 'black',     
    },


    avatar:{
      height: 200,
      width: 200,
      borderRadius:100,
      borderColor: 'width',
      borderWidth: 2,
    },

});