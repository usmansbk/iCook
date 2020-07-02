import {createOpenLink} from 'react-native-open-maps';
import {Linking, Platform} from 'react-native';

const openDialer = (number) => {
  let phone = number;
  if (Platform.OS === 'ios') {
    phone = `telprompt:${number}`;
  } else {
    phone = `tel:${number}`;
  }
  console.log(phone);
  Linking.openURL(phone).catch(console.log);
};

const openMap = (query) => {
  return createOpenLink({
    query,
  });
};

export {openDialer, openMap};
