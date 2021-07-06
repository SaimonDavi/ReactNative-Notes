import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    const diferenca = props.max - props.min + 1
    const valorAleatorio = parseInt(Math.random() * diferenca) + props.min
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório entre {props.min} e {props.max} é {valorAleatorio}
        </Text>
    )
}

/* export default props => {
    const { min, max } = props
    const diferenca = max - min + 1
    const valorAleatorio = parseInt(Math.random() * diferenca) + min
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório entre {min} e {max} é {valorAleatorio}
        </Text>
    )
} */

/* export default ({ min, max }) => {
    const diferenca = max - min + 1
    const valorAleatorio = parseInt(Math.random() * diferenca) + min
    return (
        <Text style={Estilo.txtG}>
            O valor aleatório entre {min} e {max} é {valorAleatorio}
        </Text>
    )
} */