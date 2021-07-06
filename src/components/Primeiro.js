import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default () => {
    console.warn('Um negócio')
    return (
        <Text style={Estilo.txtG}>
            Primeiro!
        </Text>
    )
}