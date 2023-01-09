import { StatusBar } from 'expo-status-bar';
import styles from './styles'
import Svg, { Image } from 'react-native-svg';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native!</Text>
    </View>
  );
}


