import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import App from './src/App';

export default function Main() {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}
