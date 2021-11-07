import React,{ useState } from 'react';
import { Image, Text, View } from 'react-native';
import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';

export default function LoadingScreen() {

const [isSplashReady,setIsSplashReady] = useState(false);
const [isAppReady,setIsAppReady] = useState(false);
    //   state = {
//     isSplashReady: false,
//     : false,
//   };

  
    if (isSplashReady) {
      return (
        <AppLoading
          startAsync={cacheSplashResourcesAsync}
          onFinish={() => setIsSplashReady(true)}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if (!isAppReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require('../assets/loadingIcon.png')}
            onLoad={cacheResourcesAsync}
          />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Image source={require('../assets/loadingIcon.png')} />
        <Image source={require('../assets/loadingIcon.png')} />
      </View>
    );
  

  async function cacheSplashResourcesAsync () {
    const gif = require('../assets/loadingIcon.png');
    return Asset.fromModule(gif).downloadAsync();
  };

  async function cacheResourcesAsync() {
    SplashScreen.hide();
    const images = [
      require('../assets/loadingIcon.png'),
      require('../assets/loadingIcon.png'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    setIsAppReady(true);
  };
}