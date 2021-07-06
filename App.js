import React from 'react'
import { View, StyleSheet } from 'react-native'

import Pai from './src/components/indireta/Pai'
//import Pai from './src/components/direta/Pai'
import MinMax from './src/components/MinMax'
import X, { Comp1, Comp2 } from './src/components/Multi'
import Primeiro from './src/components/Primeiro'
import Aleatorio from './src/components/Aleatorio'
import Titulo from './src/components/Titulo'
import Botao from './src/components/Botao'
import Contador from './src/components/Contador'

export default () => (
    <View style={style.App}>

        <Pai />

        {/* 
        <Pai />
        <Contador inicial={10} passo={10}/>
        <Contador /> 
        <Botao /> 
        <Titulo principal="Cadastro Produto"
            secundario="Tela de Cadastro do Produto" />
        <Aleatorio min={1} max={20} />
        < MinMax min={3} max={20}/>
        < MinMax min={1} max={94}/>
        <Primeiro />
        <X />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#2F4F4F',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})