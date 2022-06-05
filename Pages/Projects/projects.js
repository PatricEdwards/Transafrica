import { StyleSheet, Text, View, FlatList, StatusBar, Button, Image } from 'react-native';
import React, { useState } from "react";
const ProjectScreen = ({ navigation }) => {
    const [currentProject, setCurrentProject] = useState(-1);
    const [currentUri,setCurrentUri]=useState("");
    const DATA = [
        
        {
            id: '1',
            title: 'API Endpoints MetroFibre' ,
            description: 'This is where I got my first real world exposure to creating API enpoints. All done in .NET framework with C#',
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9O2nAmwRHkYo7_eL_XEhw6zDfajeLLoB1Iw&usqp=CAU"
        },
        {
            id: '2',
            title: 'Frontend MetroFibre ',
            description: 'This is where I got my first real world exposure to creating screens. All done in Ionic Angular',
            image: "https://metrofibre.co.za/wp-content/uploads/2020/10/seodefault.jpg"
        },
        {
            id: '3',
            title: 'Escape Room Planner',
            description: 'This started out as an assignment but quickly turned into a passion. I was team lead, we ran this with daily standups, weekly sprint plannings and it took us a year to complete. This contains a genetic algorithm and elements of graph theory. Links to the project can be found on my github',
            image: "https://media-exp1.licdn.com/dms/image/sync/C4E27AQH5NC9c1BNqsQ/articleshare-shrink_800/0/1653649468211?e=1654956000&v=beta&t=IjyNeiTtzORmnEqkTXoWVfitfd4MHWjGBfLQrt7plHg"
        },
        {
            id: '4',
            title: 'Amasocial Newsclip',
            description: 'Amasocial is used to track everything said about you or any word you would like to track on all social media platforms. I created API endpoints for this APP in C# and SQL and a few screens in React with Typescript',
            image: "https://dash.newsclip.co.za/api/drive/news/f3a6e0a94de374d9a72d1c05606a9625/MainImage.jpg"
        },
        {
            id: '5',
            title: 'Broadcast Newsclip',
            description: 'Internal system used to monitor all media streams where voice is used. I moved this system from a non relational database with a frontend in basic css,html and javascript to React with a relational databse. API was done in C#',
            image: "https://ak.picdn.net/shutterstock/videos/2432564/thumb/9.jpg"
        },
        {
            id: '6',
            title: 'CRM Newsclip',
            description: 'Mostly did frontend work for out CRM system in React.',
            image: "https://cdn.snov.io/blog/wp-content/uploads/2021/02/2jT2rNPfndRmSJ9SOdn9VFEchk8AEKpSGvPPM1Xu-1-1-1536x768.png"
        },
    ];

    const onCLick=(id)=>{
        setCurrentProject(parseInt(id-1))
        setCurrentUri(DATA[id-1].image)
    }

    const Item = ({ title,id }) => (
        <View style={styles.item}>
            <Button
            
                    title={title}
                    color="#841584"
                    onPress={() =>
                       onCLick(id)
                       
                      }
                />
            
        </View>
    );

    const InnerItem = ({ title,id }) => (
        <View style={styles.item}>
            <Button
            
                    title={title}
                    color="#841584"
                    onPress={() =>
                       setCurrentProject(id)
                      }
                />
            
        </View>
    );

    const renderInnerItem = ({ item }) => (
        <Item title={item.title} id={item.id} />
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} id={item.id} />
    );

    return (
        <View style={styles.page}>
            {currentProject === -1 &&
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            }
            {currentProject !==-1 &&
            <View style={styles.item}>
                <Text style={styles.title}>{DATA[currentProject].title}</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: currentUri,
                    }}

                />
                <Text >{DATA[currentProject].description}</Text>
                <Button
                    title="All Projects"
                    color="#841584"
                    onPress={() =>
                        setCurrentProject(-1)
                      }
                />
            </View>
            }
         </View>
    );
};


const styles = StyleSheet.create({
    page: {
        backgroundColor: 'lightblue',
        flex: 1,
    },
    image: {
        height: 200,
        width: undefined,
        resizeMode: 'stretch',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'lightgrey',
        padding: 25,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 25,
        backgroundColor: "#841584",
        borderRadius: 10,
        color: 'white',
    },

});

export default ProjectScreen