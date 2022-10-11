import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/images/felicidade.jpg")} />
            <Image style={styles.image} source={require("../assets/images/face.png")} />
            <Image style={styles.image} source={require("../assets/images/eu.jpg")} />
            <Image style={styles.image} source={require("../assets/images/eagle.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
    }, image: {
        width: 80,
        height: 80,
        margin: 5,
        resizeMode: 'contain',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black'
    }

})

export default App;