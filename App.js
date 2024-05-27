import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import NavigationScreens from './components/NavigationScreens';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <NavigationScreens />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


