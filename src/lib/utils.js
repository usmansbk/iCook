import numeral from 'numeral';
import {avatarColors} from '../config/colors';

export function getAvatarBackgroundColor(name) {
  const colorIndex = name.length % avatarColors.length;
  return avatarColors[colorIndex];
}

export const formatNumber = (val) => numeral(val).format(val > 10000 ? '0.0a' : '0a');

export const formatCurrency = (val) => numeral(val).format('0,0[.]00');
