import { StatusBar } from 'expo-status-bar';
import styles from './styles'
import Svg, { Image } from 'react-native-svg';
import { Dimensions, Text, View } from 'react-native';

export default function App() {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}>
        <Svg height={height} width={width}>
          <Image
            href={require('./assets/login-background.jpg')}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
        <View style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </View>
      </View>
    </View>
  );
}


