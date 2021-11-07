import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { AntDesign } from '@expo/vector-icons'; 

const modal = (props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleAlert = React.useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const styles=StyleSheet.create({
    textContent:{
        marginTop: -16,
        marginBottom: 32,
        color:'#ffff'
    },
    okToggle:{
        marginTop: -16,
        marginBottom: 15,
        padding:5,
        color:'#ffff'
    }
  })
  return (
    <View style={props.style}>
      <TouchableOpacity         
         onPress={toggleAlert}>
            <AntDesign name="infocirlceo" size={props.size} color={props.color} />
      </TouchableOpacity>
     
      <FancyAlert      
        visible={isVisible}
        icon={props.iconModal}
        style={{ backgroundColor: 'white' }}
      >
        <Text style={styles.textContent}>
            {props.text}
        </Text>
        <TouchableOpacity onPress={toggleAlert}>
            <Text style={styles.okToggle}>Οκ</Text>
        </TouchableOpacity>
      </FancyAlert>
    </View>
  )
}

export default modal;