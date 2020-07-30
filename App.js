import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

let customFonts = {
  'SourceSansPro': require("./assets/fonts/SourceSansPro.ttf"),
};

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete){
    return(
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    )
  }
  else {
    return (
      <AppNavigator/>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync(customFonts),
    Asset.loadAsync([
      require("./assets/images/Romane.png"),
      require("./assets/images/Loick.png"),
      require("./assets/images/Celeste.png"),
      require("./assets/images/Camille.png"),
      require("./assets/images/Lucas.png"),
      require("./assets/images/Camil.png"),
      require("./assets/images/Valentine.png"),
      require("./assets/images/Justin.png"),
      require("./assets/images/Cadena.png"),
      require("./assets/images/Couronne.png"),
      require("./assets/images/Pyramide.jpg"),
      require("./assets/images/Piedestal.png"),
      require("./assets/images/CorpsTotem.png"),
      require("./assets/images/TeteTotem.png"),
      require("./assets/images/TestPromo.jpg")
    ]),

  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
