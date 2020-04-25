import React, { useState } from 'react'; 
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'; 

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const[title, setTitle] = useState(initialValues.title);
    const[content,setContent] = useState(initialValues.content); 

    return <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input}value={title} onChangeText={(title) => setTitle(title)}/>
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input}value={content} onChangeText={(content) => setContent(content)}/>
        <View style={styles.button}>
            <Button 
            title="Save Blog Post"
            onPress={() => onSubmit(title, content)}
            /></View>
    </View>
}; 


const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 5,
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        marginHorizontal: 5,
        fontSize: 20,
        marginBottom: 5
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
}); 

export default BlogPostForm; 