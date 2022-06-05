import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Switch, Linking ,FlatList} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const openLinkedIn=()=>{
        let url="https://www.linkedin.com/in/patric-edwards-220879204/";
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            } else {
              console.log("Don't know how to open URI: " + url);
            }
          });
    }

    return (
        <View style={styles.Container}>
            <View style={[styles.View,
            { flexDirection: "row" }]}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQEG3oHulm4myQ/profile-displayphoto-shrink_800_800/0/1630521059987?e=1659571200&v=beta&t=5FEOX8vULs2q6TVnQqpbBES1zfLYhqWKaTq2PtkRUug',
                    }}

                />
                <View style={styles.alignTitle}>
                    <Text style={styles.title}>
                        Name: Patric Edwards
                        {"\n"}
                        Age: 23
                        {"\n"}
                        Language: Afrikaans
                    </Text>

                </View>
            </View>
            <View style={!isEnabled? styles.SecondHalf: styles.SecondHalfDark}>
                <Text style={!isEnabled? styles.headings: styles.headingsDark}>
                    Why me?
                </Text>
                <Text style={!isEnabled? styles.headings: styles.headingsDark}>
                    LinkedIn:
                </Text>
                <MIcon onPress={openLinkedIn} name={"linkedin"} size={40} color={"blue"} />
                <Text style={!isEnabled? styles.headings: styles.headingsDark}>
                    Projects:
                </Text>
                <Button
                    title="Learn More"
                    color="#841584"
                    onPress={() =>
                        navigation.navigate('Projects')
                      }
                />
                
                
                <Text style={!isEnabled? styles.headings: styles.headingsDark}>
                    Dark Mode:
                </Text>
                <Switch
                    trackColor={{ false:"#81b0ff" , true: "#767577" }}
                    thumbColor={isEnabled ? "#f4f3f4": "#f5dd4b" }
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View>
                
            </View>
        </View>
    );
};
export default HomeScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: 'black',
    },
    View: {
        backgroundColor: "black",
        flex: 1

    },
    alignTitle: {
        justifyContent: 'center',
    },
    title: {

        fontSize: 21,
        fontFamily: 'sans-serif-light',
        color: 'white',
        fontStyle: 'italic',
        flex: 1,
    },
    image: {
        width: 100,
        height: undefined,
        flex: 1,
    },
    SecondHalf: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    SecondHalfDark: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: 'black'
    },
    textBottom: {
        marginTop: 10,
        fontSize: 21,
        fontFamily: 'sans-serif-light',
        color: 'black',
        fontStyle: 'italic',

    },
    headings: {
        marginTop: 25,
        fontSize: 21,
        fontFamily: 'sans-serif-light',
        color: 'black',
        fontStyle: 'italic',
    },
    headingsDark:{
        marginTop: 25,
        fontSize: 21,
        fontFamily: 'sans-serif-light',
        color: 'white',
        fontStyle: 'italic',
    }
});