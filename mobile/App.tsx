import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ProgressBarAndroidComponent, ProgressViewIOSComponent } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <Text>
        Hello React native
      </Text>

<Button title='Send 1'/>

      <StatusBar style="auto" backgroundColor='red' />
    </View>
  );
}

interface ButtonProps {
  title: String;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
