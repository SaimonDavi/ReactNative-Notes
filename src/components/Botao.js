import React from 'react'
import { Button } from 'react-native'

export default props => {

    executar = () => console.warn('Pronto 1')

    return (
        <>
            <Button 
                title="Executar #01"
                onPress={executar}
            />
            <Button 
                title="Executar #02"
                onPress={function() {
                    console.warn('Pronto 2')
                }}
            />
            <Button 
                title="Executar #03"
                onPress={() => console.warn('Pronto 3')}
            />
        </>
    )
}