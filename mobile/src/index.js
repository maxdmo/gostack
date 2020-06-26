import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import api from './services/api';

//As tags nao possuem valor semantico (significado)
//As tags nao possuem estilizacao propria
//Todos os componentes possuem por padrao display:flex

//View: div, footer, header, main, aside, section
//Text: p, span, strong, h1, h2, h3

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post(`/projects`, {
            title: `Novo projeto ${Date.now()}`,
            owner: `Max Potasio`,
        })

        const project = response.data;

        setProjects([...projects, response.data])
    };

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159C1"/>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project })=> (
                        <Text style={styles.project} key={project.id}>{project.title}</Text>
                    )}
                >
                </FlatList>

                <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
                    <Text style={styles.buttonText}>Adicionar projeto</Text>
                </TouchableOpacity>  
            </SafeAreaView>
            {/* <View style={styles.container}>
                {projects.map(project => (
                ))}
            </View> */}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7159C1",
    },
    project: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        margin: 20,
        height: 50,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase'
    }
});