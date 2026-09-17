import { View, Text, TouchableOpacity } from "react-native"

export default function CollectionBTN({elem, handleSupp}){
    return(
        <View style={{backgroundColor: elem.color}}>
            <Text>{elem.name}</Text>
            <Text>{elem.style}</Text>

            <TouchableOpacity>
                <Text style={{backgroundColor: "orange"}}>Modifier</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSupp(elem.name)}>
                <Text style={{backgroundColor: "red"}}>Supp</Text>
            </TouchableOpacity>
        </View>
    )
}