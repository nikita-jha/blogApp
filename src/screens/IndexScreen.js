import React, { useContext, useEffect } from 'react'; 
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import BlogContext from '../context/BlogContext'; 
import {Feather} from '@expo/vector-icons'; 

const IndexScreen = ({ navigation }) => {
    const { data, deleteBlogPost, getBlogPosts } = useContext(BlogContext); 
    
    useEffect(() => {
        getBlogPosts(); 
    }, [])
    return <View>
        <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
            <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon}/>
            </TouchableOpacity>
            </View>
            </TouchableOpacity>
            )
        }}
        />
            </View>

}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (<TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Feather name="plus" style={styles.plus} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'grey'
    }, 
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }, 
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    plus: {
        fontSize: 30,
        marginRight: 10
    }
}); 

export default IndexScreen; 

//useContext is a hook that says look at some context object and give us access to that thing's
//props such as value. Context is used to move/shepherd information around easier

//onPress={() => {addBlogPosts()}} is the same as onPress={addBlogPost}