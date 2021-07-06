import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => (
    <>
        <Text style={Estilo.txtG}> {props.principal} </Text>
        <Text> {props.secundario} </Text>
    </>
)


/* import React from 'react'
export default props => (
    <React.Fragment>
        <Text style={Estilo.txtG}> {props.principal} </Text>
        <Text> {props.secundario} </Text>
    </React.Fragment>
) */

/* import React, {Fragment} from 'react'
export default props => (
    <Fragment>
        <Text style={Estilo.txtG}> {props.principal} </Text>
        <Text> {props.secundario} </Text>
    </Fragment>
) */