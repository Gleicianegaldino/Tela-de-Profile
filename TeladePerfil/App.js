import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, SafeAreaView } from 'react-native';


const colorGithub = '#010409';
const imageGithub = 'https://avatars.githubusercontent.com/u/78940661?s=400&u=dbf6b4edb4f6ac84fb95ce7488afac811fa104d2&v=4';


export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.content} >
        <StatusBar style="auto" backgroundColor={colorGithub} barStyle="light-content"/>
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
      alignItems:'center',
      justifyContent: 'center',
    },

    content: {
      alignItems:'center',

    },

   


    avatar:{
      height: 200,
      width: 200,
      borderRadius:100,
      borderColor: '#ffffff',
      borderWidth: 2,
    },

});