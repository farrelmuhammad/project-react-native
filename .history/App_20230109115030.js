import { StatusBar } from 'expo-status-bar';
import styles from './styles'
import Svg, { Image } from 'react-native-svg';
import { Dimensions, View } from 'react-native';

export default function App() {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Svg height={height} width={width}>
        <Image 
        href={require('./assets/login-background.jpg')} 
        width={width} 
        height={height}
        preserveAspectRatio="xMidYMid slice"
        />
      </Svg>
    </View>
  );
}


