import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScreenContainer from './ScreenContainer';
import { Provider } from 'react-redux';
import store from './Redux/Store';
export default function App() {
  return (
    <Provider store={store}>
    <View>
      <ScreenContainer />
    </View>
    </Provider>
  );
}