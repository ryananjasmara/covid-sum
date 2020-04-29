import {Linking} from 'react-native';

export function openLinkInOtherApp(url) {
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    }
  });
}

export function thousandSeparator(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
