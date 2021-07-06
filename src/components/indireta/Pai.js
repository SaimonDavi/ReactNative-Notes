import React, { useState } from 'react'
import { Text } from 'react-native'
import Filho from './Filho'
import Estilo from '../estilo'

export default props => {
    const [texto, setTexto] = useState ('')
    const [num, setNum] = useState (0)


    function exibirValor(numero, texto) {
       setNum(numero)
       setTexto(texto)
    }

    return (
        <>
        <Text style={Estilo.txtG}>
            {texto}{num}
        </Text>
        <Filho 
            funcao={exibirValor}
            min={1}
            max={60}
        />
        </>
    )
}