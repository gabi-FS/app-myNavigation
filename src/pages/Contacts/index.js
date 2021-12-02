import React from "react";
import {View, Text} from 'react-native'

export default function Contacts({navigation}){
    return(
        <View style={{marginTop:60}}>
            <View>
                <Text>Nome: João Silva</Text>
                <Text>Telefone: (48) 99999-0000</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                    {
                        nome: 'João Silva',
                        telefone: '(48) 99999-0000',
                        endereco: 'Rua das Roseiras',
                        numero: '5',
                        profissao: 'Carpinteiro',
                        email: 'joaosilva@carpintaria.com'
                    }
                    )}
                >Information...</Text>
            </View>
            <View style={{marginTop:20}}>
                <Text>Nome: Amanda Silva</Text>
                <Text>Telefone: (48) 99899-1111</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                    {
                        nome: 'Amanda Silva',
                        telefone: '(48) 91234-0004',
                        endereco: 'Rua do Silício',
                        numero: '101',
                        profissao: 'Engenheira de software',
                        email: 'amanda.dev@devcode.com'
                    }
                    )}
                >Information...</Text>
            </View>
        </View>
        
    )
}