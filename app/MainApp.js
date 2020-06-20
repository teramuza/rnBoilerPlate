/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'react-native-gesture-handler';
import type { ReactNode } from 'react-native/Libraries/Renderer/shims/ReactTypes';
import { I18nextProvider } from 'react-i18next';
import { AppStatusBar } from './Components';
import { getPersistor, getStore } from './Redux/Store';
import RootNavigation from './Routes/Navigation';
import { APP_THEME, Colors } from './Themes';
import I18n from './I18next/I18n';

const store = getStore();
const persistor = getPersistor();

const COLOR_THEME = Colors.APP_THEME.MAIN_COLOR;

const MainApp: () => ReactNode = () => (
  <I18nextProvider i18n={I18n}>
    <SafeAreaView style={{ flex: 0, backgroundColor: COLOR_THEME }} />
    <SafeAreaView style={{ flex: 1, backgroundColor: COLOR_THEME }}>
      <AppStatusBar backgroundColor={COLOR_THEME} barStyle="light-content" />
      <StoreProvider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <PaperProvider theme={APP_THEME}>
            <RootNavigation />
          </PaperProvider>
        </PersistGate>
      </StoreProvider>
    </SafeAreaView>
  </I18nextProvider>
);

export default MainApp;
