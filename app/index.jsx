import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CollectionBTN from '../components/collectionBTN';

export default function Index(){
    const [collection, setCollection] = useState([]);
    const [text, setText] = useState('');
    const [styleSelec, setStyleSelect] = useState(["Rock", "#D32F2F"]);

    const musicStyles = [["Rock", "#D32F2F"], ["Jazz", "#7B1FA2"], ["Électro", "#0288D1"], ["Hip-Hop", "#F57C00"], ["Pop", "#C21858"]];
    
    function handlePress(){
        if(collection.length < 10){
            let newItem = {
                'name': text,
                'style': styleSelec[0],
                'color': styleSelec[1]
            }
            setCollection([...collection, newItem])
        }
    }

    function handleSupp(name){
        setCollection(collection.filter((elem) => elem.name != name))
    }

    return (
        <SafeAreaView>
            <Text>VinyVault - Ma Discotheque</Text>
            <View style={styles.addMenu}>
                <Text>Titre de l'album</Text>
                <TextInput placeholder='Ex: Discovery - Draft Punk' onChangeText={val => setText(val)}/>

                <Text>Genre musical</Text>
                {musicStyles.map(mStyle => {
                    return(
                        <TouchableOpacity style={[styles.genreBtn, {backgroundColor: mStyle[1]}]} onPress={() => setStyleSelect(mStyle)}>
                            <Text>{mStyle[0]}</Text>
                        </TouchableOpacity>
                    )
                })}
                <TouchableOpacity style={styles.addBtn} onPress={() => handlePress()}>
                    <Text>Ajouter a la collection</Text>
                </TouchableOpacity>
            </View>

            <Text>Collection ({collection.length}/10)</Text>
            {collection.map(elem => {
                return <CollectionBTN elem={elem} handleSupp={handleSupp}/>
            })}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    genreBtn:{

    },
    addBtn:{
        backgroundColor: 'green'
    },
    collec:{

    },
    addMenu:{
        backgroundColor: 'grey'
    }
})