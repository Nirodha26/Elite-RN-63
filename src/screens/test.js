import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';

function Counter() {
    // State: a counter value
    const [counter, setCounter] = useState(0)
  
    // Action: code that causes an update to the state when something happens
    const increment = () => {
      setCounter(prevCounter => prevCounter + 1)
    }
  
    // View: the UI definition
    return (
        <View style={styles.container}>
            <Text style={styles.count}>{counter}</Text>
            <TouchableOpacity
                onPress={increment}>
                <Text>Increment</Text>
            </TouchableOpacity>
        </View>
    )
  }


export default Counter;