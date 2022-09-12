import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ProgressBarAndroidComponent, ProgressViewIOSComponent } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>
        Hello React native
      </Text>

<Button title='Send 1'/>

      <StatusBar style="auto"/>
    </View>
  );
}

interface ButtonProps {
  title: String;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.title}>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
title: {
    color: '#F5F5F5',
    fontSize: 18
}
});