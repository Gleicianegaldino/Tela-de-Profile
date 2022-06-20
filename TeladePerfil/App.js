import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Linking, Pressable, Text, Image, View, SafeAreaView } from 'react-native';



const colorGithub = '#010409';
const imageGithub = 'https://avatars.githubusercontent.com/u/78940661?s=400&u=dbf6b4edb4f6ac84fb95ce7488afac811fa104d2&v=4';
const colorGithubLetra = '#C9D1D9';
const colorDarkGithubLetra = '#4F565E';
const urlGithub ='https://github.com/Gleicianegaldino';

export default function App() {

  const handlePressGoToGithub = async () => {
  console.log("Verificando link");

  const res = await Linking.canOpenURL(urlGithub);
  
    if(res){
      console.log("Link aprovado");
      console.log("Abrindo link")
      await Linking.canOpenURL(urlGithub);
    }
  };

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.content} >
        <StatusBar style="auto" backgroundColor={colorGithub} barStyle="light-content"/>
        <Image accessibilitylabel='Gleiciane foto de perfil com fundo branco' 
        style={styles.avatar} source={{uri:imageGithub}}/>

       <Text 
       accessibilitylabel='Nome: Gleiciane Galdino'
       style ={[styles.defaultText, styles.name]}>Gleiciane Galdino
       </Text>
       
       <Text 
       accessibilitylabel='Nickname: Gleicianegaldino'
       style ={[styles.defaultText, styles.nickname]}>Gleicianegaldino
       </Text>
       
       <Text 
       accessibilitylabel='Descrição: Internet Systems Student┇ MySQL┇ PHP┇ JavaScript┇ Bootstrap┇ HTML5┇ CSS3┇ Java┇ React Native'
       style ={[styles.defaultText, styles.description]}>Internet Systems Student┇ MySQL┇ PHP┇ 
       JavaScript┇ Bootstrap┇ HTML5┇ CSS3┇ Java┇ React Native
       </Text>

        <Pressable onPress={handlePressGoToGithub}>
          <View style={styles.button}>
          <Text style={[styles.textButton, styles.defaultText]}> Open in Github</Text>
          </View>
        </Pressable>
        
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

   defaultText: {
    color: colorGithubLetra,

   },

   name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize:24,
   },

   nickname:{
    fontSize:18,
    color: colorDarkGithubLetra,
   },

   description: {
    fontWeight: 'bold',
    fontSize:16,
   },

    avatar:{
      height: 200,
      width: 200,
      borderRadius:100,
      borderColor: '#ffffff',
      borderWidth: 2,
    },

    button:{
      marginTop: 20,
      backgroundColor: colorDarkGithubLetra,
      borderRadius: 10,
      padding:20,
    },

    textButton:{
      fontWeight: 'bold',
    fontSize:16,

    },

});