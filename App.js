import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

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
    Asset.loadAsync([
      require("./assets/images/Romane.jpg"),
      require("./assets/images/Loick.jpg"),
      require("./assets/images/Celeste.jpg"),
      require("./assets/images/Camille.jpg"),
      require("./assets/images/Valentine.jpg"),
      require("./assets/images/Cadena.png"),
      require("./assets/images/Ornikar.png"),
      require("./assets/images/Pack5h.png"),
      require("./assets/images/Pack10h.png"),
      require("./assets/images/Pack20h.png"),
      require("./assets/images/AntreDeMondes.png"),
      require("./assets/images/YouaHead.png"),
      require("./assets/images/VBHead.png"),
      require("./assets/images/TampiHead.png"),
      require("./assets/images/KBHead.png"),
      require("./assets/images/Maya.png")
    ]),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}
