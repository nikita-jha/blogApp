import React, { useContext } from 'react'; 
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'; 
import BlogContext from '../context/BlogContext'; 
import { EvilIcons } from '@expo/vector-icons'; 


const ShowScreen = ({ navigation }) => {
    const { data } = useContext(BlogContext); 

    const blogPost = data.find((blogPost)=>blogPost.id === navigation.getParam('id'))
    return <View style={styles.view}>
        <Text style={styles.title}>Title:</Text>
        <Text style={styles.content}>{blogPost.title}</Text>
        <Text style={styles.title}>Content:</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
    </View>
}; 

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate('Edit', {id: navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    title: {
        color: '#7B68EE',
        left: 10,
        fontSize: 35
    },
    content: {
        left: 10,
        fontSize: 45
    }, 
    view: {
        flex: 1,
        backgroundColor: "#F0FFF0"
    }
}); 

export default ShowScreen; 