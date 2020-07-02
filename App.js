import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import App from './src/App';

export default function Main() {
  React.useEffect(() => {
    SplashScreen.hide();
  });

  return <App />;
}
