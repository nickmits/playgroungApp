import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';

 function Scan(props) {
   const { navigation } = (props)
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  function navigateToComment(data){
    return(
      navigation.navigate({ name: 'CommentScreen', params: data})
    );
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  },[]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    axios.get(`https://api.atmacom.crassus.tech/v1/equipment/find?id=${data}`)
    .then(res => {
      navigateToComment(res.data);
    }).catch(err => {
        console.log('Error getting data for ', data, 'with error: ', err)
        alert(`Κάτι πήγε στραβά! Ο κωδικός Barcode που σκανάρατε δεν αντιστοιχεί σε κάποιο όργανο της υπηρεσίας.`);
    })
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#ffff'
        
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
      {scanned && <Button color="rgb(95, 187, 113)" title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
  
}
const opacity = 'rgba(13, 156, 104, .8)';
const styles = StyleSheet.create({
  layerTop: {
    flex: 2,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 2,
    flexDirection: 'row',

  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
  },
  focused: {
    flex: 8
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
    
  },
  layerBottom: {
    flex: 2,
    backgroundColor: opacity,
  },
  borderSquare: {
    borderStyle:"dashed"
  }
});
export default Scan;

