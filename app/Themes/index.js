//flow
import { DefaultTheme, Theme, configureFonts } from 'react-native-paper';

//themes
import Colors from './Colors';
import { FontType, FontSize } from './Fonts';
import { Images, Logo } from './Images';

const fontConfig = {
  default: {
    regular: {
      fontFamily: FontType.SEMI_BOLD,
      fontWeight: 'normal'
    },
    medium: {
      fontFamily: FontType.BOLD,
      fontWeight: 'normal'
    },
    light: {
      fontFamily: FontType.LIGHT,
      fontWeight: 'normal'
    },
    thin: {
      fontFamily: FontType.SEMI_BOLD,
      fontWeight: 'normal'
    }
  }
};

const APP_THEME: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.APP_THEME.PRIMARY,
    accent: Colors.BLACK,
    background: Colors.WHITE
  },
  fonts: configureFonts(fontConfig)
};

export {
  APP_THEME,
  Colors,
  FontType,
  FontSize,
  Images,
  Logo
};
