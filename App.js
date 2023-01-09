import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React from 'react'

export default function App () {
  return (
  <>
    <SafeAreaView style={styles.container}>
     <View style={{ backgroundColor: '#fcba03', padding: 16 }}>
     <Text style={{ fontSize: 20 }}> Search </Text>
     </View>
     <View style={{ backgroundColor: '#c7d96f', flex: 1, padding: 16 }}>
     <Text style={{ fontSize: 20 }}> List </Text>
     </View>
    </SafeAreaView>
  <ExpoStatusBar style="auto"/>
</>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#64799c'
  }
})
