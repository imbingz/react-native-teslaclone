import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
    //deconstruct props 
    const { name, tagline, taglineAlt, imageSrc } = props.car
    

    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source={imageSrc} 
                style={styles.image} 
            />
            <View style={styles.titles}>
                <Text style={styles.title}> { name } </Text>  
                <Text style={styles.subTitle}> 
                   { tagline } {' '}
                   <Text style={styles.subTitleAlt}>
                       { taglineAlt}
                   </Text>
                </Text>  
            </View>
            <View style={styles.buttonContainer}>
                <StyledButton 
                    type='primary' 
                    content='Custom Order'
                    onPress={() => console.warn('Custom Order was pressed')}
                />
                <StyledButton 
                    type='secondary' 
                    content='Existing Inventory'
                    onPress={() => console.warn('Existing Inventory was pressed')}
                />
            </View> 
        </View> 
    )
}

export default CarItem;


