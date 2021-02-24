import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles';


const StyledButton = (props) => {
    //deconstruct button types (different colors), content, onPress props
    const { type, content, onPress } = props
    // console.warn(type);
    
    //define background color based on the type 
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    //define text color dynamically 
    const textColor = type === 'primary' ?  '#FFFFFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => {onPress()}}
            >
                <Text style={[styles.text, {color: textColor}]}>{ content } </Text>
            </Pressable>
        </View>
    )
}

export default StyledButton
