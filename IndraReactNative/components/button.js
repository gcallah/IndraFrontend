import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

function ButtonUseModel(props){
    const { buttonStyle, testID, textStyle, navigation, modelID } = props
    console.log("modelID:", modelID)
    return(
        <TouchableOpacity
            style = {buttonStyle}
            onPress={() => navigation.navigate('Properties', {
                modelID: modelID
            })}
            testID = {testID}>
            <Text style = {textStyle}>
                Use this model
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonUseModel