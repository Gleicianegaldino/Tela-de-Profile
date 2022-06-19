import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <View >
        <StatusBar backgroundColor={"grey"} barStyle="dark-content"/>
        <Text style={styles.text}>TELA DE PROFILE</Text>
        <StatusBar style="auto"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      flex: 1,
    },


    text: {
          fontSize: 50,
          fontWeight: 'bold',
          color: 'black',     
    },

});