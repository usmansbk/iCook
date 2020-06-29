import {avatarColors} from '../config/colors';

export function getAvatarBackgroundColor(name) {
  const colorIndex = name.length % avatarColors.length;
  return avatarColors[colorIndex];
}
